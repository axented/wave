import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@services/firestore.service';
import { Customer } from '@models/customer';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Invoice } from '@models/invoice';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '@models/item';
import * as moment from 'moment';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  providers: [ToastrService]
})
export class AddInvoiceComponent implements OnInit {
  customers: Customer[] = []

  invoiceForm: FormGroup = this.fb.group({
    customer: ['', Validators.required],
    fromDate: ['', Validators.required],
    items: this.fb.array([this.createItem()]),
    number: ['', Validators.required],
    refNumber: ['', Validators.required],
    toDate: ['', Validators.required],
  })
  itemsForm: FormArray = this.fb.array([])

  items: Item[] = []

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  addItem() {
    this.itemsForm = this.invoiceForm.get('items') as FormArray
    this.itemsForm.push(this.createItem())
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [1, Validators.required],
    });
  }

  getAmount(itemIndex: number): number {
    if (this.invoiceForm.get('items').value.length) {
      const itemAmount = this.invoiceForm.get('items').value[itemIndex].quantity * this.invoiceForm.get('items').value[itemIndex].price
      return itemAmount
    } else {
      return 0
    }
  }

  getTotalAmount(): number {
    if (this.invoiceForm.get('items').value.length) {
      let total = 0
      this.invoiceForm.get('items').value.forEach(element => {
        total += element.quantity * element.price
      })
      return total
    } else {
      return 0
    }
  }

  submitInvoice(form: FormGroup) {
    let invoice = new Invoice({
      amount: this.getTotalAmount(),
      customer: form.get('customer')?.value,
      createdDate: moment().format('ll'),
      dueDate: form.get('toDate')?.value,
      paidOn: '',
      estimateDate: form.get('fromDate')?.value,
      expiryDate: form.get('toDate')?.value,
      items: form.get('items')?.value,
      number: form.get('number')?.value,
      refNumber: form.get('refNumber')?.value,
      status: 'Sent',
    })
    this.firestoreService.createInvoice(invoice).then(() => {
      this.toastr.success('Invoice added')
      this.activeModal.close()
    }, (error) => {
      console.error('Something went wrong to register invoice: ', error);
    })
  }

  removeItem(itemIndex: number) {
    const items = this.invoiceForm.get('items') as FormArray
    items.removeAt(itemIndex)
  }

  private getCustomers() {
    this.firestoreService.getCustomers().subscribe(
      res => {
        this.customers = []
        res.forEach((customer: any) => {
          this.customers.push({
            id: customer.payload.doc.id,
            amountDue: customer.payload.doc.data().amountDue,
            billing: customer.payload.doc.data().billing,
            contactName: customer.payload.doc.data().contactName,
            currency: customer.payload.doc.data().currency,
            email: customer.payload.doc.data().email,
            phone: customer.payload.doc.data().phone,
            registeredOn: customer.payload.doc.data().registeredOn,
            img: customer.payload.doc.data().img,
            name: customer.payload.doc.data().name,
            website: customer.payload.doc.data().website,
            role: customer.payload.doc.data().role,
            shipping: customer.payload.doc.data().shipping,
            status: customer.payload.doc.data().status,
          })
        })
      }, (error) => {
        console.error('Something went wrong getting customers: ', error)
      }
    )
  }
}
