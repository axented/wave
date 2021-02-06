import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '@services/firestore.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '@models/customer';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  providers: [ToastrService]
})
export class AddCustomerComponent implements OnInit {
  @Input() id: string

  billingForm: FormGroup = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
  })
  customerForm: FormGroup = this.fb.group({
    contactName: [''],
    currency: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    website: [''],
  })
  shippingForm: FormGroup = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', Validators.required],
  })

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    if (this.id != '')
      this.getCustomer()
  }

  getStatusForms(): boolean {
    if (this.customerForm.valid && this.billingForm.valid && this.shippingForm.valid)
      return false
    else
      return true
  }

  setSubmitText(): string {
    if (this.id == '')
      return 'Add Customer'
    else
      return 'Save changes'
  }

  submitCustomer(form: FormGroup) {
    let customer = new Customer({
      id: '',
      amountDue: 0,
      billing: this.billingForm.value,
      contactName: form.get('contactName')?.value,
      currency: form.get('currency')?.value,
      email: form.get('email')?.value,
      img: 'https://avatars.dicebear.com/api/human/-01.svg',
      name: form.get('name')?.value,
      phone: form.get('phone')?.value,
      registeredOn: moment().format('ll'),
      role: 'Customer',
      shipping: this.shippingForm.value,
      status: 'Active',
      website: form.get('website')?.value,
    })
    if (this.id == '') {
      this.firestoreService.createCustomer(customer).then(() => {
        this.toastr.success('Customer added')
        this.activeModal.close()
      }, (error) => {
        console.error('Something went wrong: ', error);
      })
    } else {
      this.firestoreService.updateCustomer(this.id, customer).then(() => {
        this.toastr.success('Changes saved')
        this.activeModal.close()
      }, (error) => {
        console.error('Something went wrong: ', error);
      })
    }
  }

  private getCustomer() {
    this.firestoreService.getCustomer(this.id).subscribe((res: any) => {
      this.billingForm.patchValue({
        address: res.payload.data().billing.address,
        city: res.payload.data().billing.city,
        country: res.payload.data().billing.country,
        name: res.payload.data().billing.name,
        phone: res.payload.data().billing.phone,
        state: res.payload.data().billing.state,
        zipCode: res.payload.data().billing.zipCode,
      })
      this.customerForm.patchValue({
        contactName: res.payload.data().contactName,
        currency: res.payload.data().currency,
        email: res.payload.data().email,
        name: res.payload.data().name,
        phone: res.payload.data().phone,
        website: res.payload.data().website,
      })
      this.shippingForm.patchValue({
        address: res.payload.data().shipping.address,
        city: res.payload.data().shipping.city,
        country: res.payload.data().shipping.country,
        name: res.payload.data().shipping.name,
        phone: res.payload.data().shipping.phone,
        state: res.payload.data().shipping.state,
        zipCode: res.payload.data().shipping.zipCode,
      })
    })
  }
}
