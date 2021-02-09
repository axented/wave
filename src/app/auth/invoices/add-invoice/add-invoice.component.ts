import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '@services/firestore.service';
import { Customer } from '@models/customer';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Invoice } from '@models/invoice';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '@models/product';
import * as moment from 'moment';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  providers: [ToastrService]
})
export class AddInvoiceComponent implements OnInit {
  @Input() id: string

  customer: Customer

  customers: Customer[] = []
  invoiceForm: FormGroup = this.fb.group({
    customer: ['', Validators.required],
    fromDate: ['', Validators.required],
    products: this.fb.array([this.createProduct()]),
    number: ['', Validators.required],
    refNumber: ['', Validators.required],
    toDate: ['', Validators.required],
  })
  formatMatches = (value: any) => value.name || '';
  productsForm: FormArray = this.fb.array([])
  products: Product[] = []
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.products.filter(product => product.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  tax: number = 0

  constructor(
    public activeModal: NgbActiveModal,
    private auth: AngularFireAuth,
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    if (this.id != '')
      this.getInvoice()

    this.auth.currentUser.then((user) => {
      this.getCustomers(user)
      this.getProducts(user)
    })
  }

  addProduct() {
    this.productsForm = this.invoiceForm.get('products') as FormArray
    this.productsForm.push(this.createProduct())
  }

  createProduct(): FormGroup {
    return this.fb.group({
      product: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [1, Validators.required],
    });
  }

  getAmount(productIndex: number): number {
    if (this.invoiceForm.get('products').value.length) {
      const productAmount =
      this.invoiceForm.get('products').value[productIndex].quantity *
      (this.invoiceForm.get('products').value[productIndex].price *
      +('1.' + this.tax.toString()))
      return +productAmount.toFixed(2)
    } else {
      return 0
    }
  }

  getPricesAmount() {
    if (this.invoiceForm.get('products').value.length) {
      let total = 0
      this.invoiceForm.get('products').value.forEach(element => {
        total += element.quantity * element.price
      })
      return +total.toFixed(2)
    } else {
      return 0
    }
  }

  getTaxesAmount(): number {
    if (this.invoiceForm.get('products').value.length) {
      let total = 0
      this.invoiceForm.get('products').value.forEach(element => {
        total += element.quantity * (element.price * +('0.' + this.tax.toString()))
      })
      return +total.toFixed(2)
    } else {
      return 0
    }
  }

  getTotalAmount(): number {
    if (this.invoiceForm.get('products').value.length) {
      let total = 0
      this.invoiceForm.get('products').value.forEach(element => {
        total += element.quantity * (element.price * +('1.' + this.tax.toString()))
      })
      return +total.toFixed(2)
    } else {
      return 0
    }
  }

  selectedProduct(data, form: FormGroup) {
    form.patchValue({
      price: data.item.price
    })
    this.tax = data.item.taxable
  }

  submitInvoice(form: FormGroup) {
    this.auth.currentUser.then((user) => {
      let invoice = new Invoice({
        id: '',
        amount: this.getTotalAmount(),
        customer: form.get('customer')?.value,
        createdDate: moment().format('ll'),
        dueDate: form.get('toDate')?.value,
        paidOn: '',
        estimateDate: form.get('fromDate')?.value,
        expiryDate: form.get('toDate')?.value,
        number: form.get('number')?.value,
        ownerId: user.uid,
        products: form.get('products')?.value,
        refNumber: form.get('refNumber')?.value,
        status: 'Sent',
      })
      this.firestoreService.createInvoice(invoice).then(() => {
        this.toastr.success('Invoice added')
        this.activeModal.close(invoice.customer.id)
      }, (error) => {
        console.error('Something went wrong to register invoice: ', error);
      })
    })
  }

  removeProduct(productIndex: number) {
    const products = this.invoiceForm.get('products') as FormArray
    products.removeAt(productIndex)
  }

  private getCustomers(currentUser) {
    this.firestoreService.getCustomers().subscribe(
      res => {
        this.customers = []
        res.forEach((customer: any) => {
          if (customer.payload.doc.data().ownerId === currentUser.uid) {
            this.customers.push({
              id: customer.payload.doc.id,
              amountDue: customer.payload.doc.data().amountDue,
              billing: customer.payload.doc.data().billing,
              contactName: customer.payload.doc.data().contactName,
              currency: customer.payload.doc.data().currency,
              email: customer.payload.doc.data().email,
              img: customer.payload.doc.data().img,
              name: customer.payload.doc.data().name,
              ownerId: customer.payload.doc.data().ownerId,
              phone: customer.payload.doc.data().phone,
              registeredOn: customer.payload.doc.data().registeredOn,
              role: customer.payload.doc.data().role,
              shipping: customer.payload.doc.data().shipping,
              status: customer.payload.doc.data().status,
              website: customer.payload.doc.data().website,
            })
          }
        })
      }, (error) => {
        console.error('Something went wrong getting customers: ', error)
      }
    )
  }

  private getInvoice() {
    let once = true
    this.removeProduct(0)
    this.firestoreService.getInvoice(this.id).subscribe((res: any) => {
      if (once) {
        this.invoiceForm.patchValue({
          customer: res.payload.data().customer,
          fromDate: res.payload.data().estimateDate,
          number: res.payload.data().number,
          refNumber: res.payload.data().refNumber,
          toDate: res.payload.data().expiryDate,
        })

        this.customer = res.payload.data().customer

        const products = res.payload.data().products
        products.forEach(element => {
          this.productsForm = this.invoiceForm.get('products') as FormArray
          this.productsForm.push(this.fb.group({
            product: element.product,
            price: element.price,
            quantity: element.quantity,
          }))
          this.tax = element.product.taxable
        })
        once = false
      }
    })
  }

  private getProducts(currentUser) {
    this.firestoreService.getProducts().subscribe(
      res => {
        this.products = []
        res.forEach((product: any) => {
          if (product.payload.doc.data().ownerId === currentUser.uid) {
            this.products.push({
              id: product.payload.doc.id,
              description: product.payload.doc.data().description,
              name: product.payload.doc.data().name,
              ownerId: product.payload.doc.data().ownerId,
              price: product.payload.doc.data().price,
              quantity: product.payload.doc.data().quantity,
              taxable: product.payload.doc.data().taxable,
            })
          }
        })
      }, (error) => {
        console.error('Something went wrong getting products: ', error);
      })
  }
}
