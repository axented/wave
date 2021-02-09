import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FirestoreService } from '@services/firestore.service';
import { AngularFireAuth } from '@angular/fire/auth';
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
    private auth: AngularFireAuth,
    private firestoreService: FirestoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      this.getCustomers(user)
    })
  }

  deleteCustomer(customer: Customer) {
    this.firestoreService.deleteCustomer(customer.id)
  }

  openCustomerModal(id: string) {
    const modalRef = this.modalService.open(
      AddCustomerComponent,
      {
        animation: true,
        size: 'lg'
      }
    )
    modalRef.componentInstance.id = id
  }

  private getCustomers(currentUser) {
    this.firestoreService.getCustomers().subscribe(
      res => {
        this.customers = []
          res.forEach((customer: any) => {
            if(customer.payload.doc.data().ownerId === currentUser.uid) {
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
        },
      (error) => (this.errorMessage = <any>error)
    )
  }
}
