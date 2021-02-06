import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '@services/firestore.service';
import { Customer } from '@models/customer';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Estimate } from '@models/estimate';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '@models/item';

@Component({
  selector: 'app-add-estimates',
  templateUrl: './add-estimates.component.html',
  providers: [ToastrService]
})
export class AddEstimatesComponent implements OnInit {
  customers: Customer[] = []

  estimateForm: FormGroup = this.fb.group({
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
    this.itemsForm = this.estimateForm.get('items') as FormArray
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
    if (this.estimateForm.get('items').value.length) {
      const itemAmount = this.estimateForm.get('items').value[itemIndex].quantity * this.estimateForm.get('items').value[itemIndex].price
      return itemAmount
    } else {
      return 0
    }
  }

  getTotalAmount(): number {
    if (this.estimateForm.get('items').value.length) {
      let total = 0
      this.estimateForm.get('items').value.forEach(element => {
        total += element.quantity * element.price
      })
      return total
    } else {
      return 0
    }
  }

  submitEstimate(form: FormGroup) {
    let estimate = new Estimate({
      amount: this.getTotalAmount(),
      customer: form.get('customer')?.value,
      estimateDate: form.get('fromDate')?.value,
      expiryDate: form.get('toDate')?.value,
      items: form.get('items')?.value,
      number: form.get('number')?.value,
      refNumber: form.get('refNumber')?.value,
      status: 'Sent',
    })
    this.firestoreService.createEstimate(estimate).then(() => {
      this.toastr.success('Estimate added')
      this.activeModal.close()
    }, (error) => {
      console.error('Something went wrong to register estimate: ', error);
    })
  }

  removeItem(itemIndex: number) {
    const items = this.estimateForm.get('items') as FormArray
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
