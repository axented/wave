import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FirestoreService } from '@services/firestore.service';
import { Customer } from '@models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = []
  errorMessage: string = ''

  constructor(
    private firestoreService: FirestoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  deleteCustomer(customer: Customer) {
    this.firestoreService.deleteCustomer(customer.id)
  }

  openAddCustomerModal(id: string) {
    const modalRef = this.modalService.open(
      AddCustomerComponent,
      {
        animation: true,
        size: 'lg'
      }
    )
    modalRef.componentInstance.id = id
  }

  private getCustomers() {
    this.firestoreService.getCustomers().subscribe(
      res => {
        this.customers = []
        res.forEach((customer: any) => {
          this.customers.push({
            id: customer.payload.doc.id,
            amountDue: customer.payload.doc.data().amountDue,
            contactName: customer.payload.doc.data().contactName,
            currency: customer.payload.doc.data().currency,
            email: customer.payload.doc.data().email,
            phone: customer.payload.doc.data().phone,
            registeredOn: customer.payload.doc.data().registeredOn,
            img: customer.payload.doc.data().img,
            name: customer.payload.doc.data().name,
            website: customer.payload.doc.data().website,
            role: customer.payload.doc.data().role,
            status: customer.payload.doc.data().status,
            billing: customer.payload.doc.data().billing,
            shipping: customer.payload.doc.data().shipping,
          })
        })
      },
      (error) => (this.errorMessage = <any>error)
    )
  }
}
