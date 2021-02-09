import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Invoice } from '@models/invoice';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '@services/firestore.service';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[] = []
  errorMessage?: string;

  constructor(
    private auth: AngularFireAuth,
    private firestoreService: FirestoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      this.getInvoices(user)
    })
  }

  deleteInvoice(invoice: Invoice) {
    this.firestoreService.deleteInvoice(invoice.id)
  }

  openInvoiceModal(id: string) {
    const modalRef = this.modalService.open(
      AddInvoiceComponent,
      {
        animation: true,
        size: 'lg'
      }
    )
    modalRef.componentInstance.id = id
    modalRef.result.then((res) => {
      this.updateCustomer(res)
    })
  }

  private updateCustomer(id: string) {
    let total = 0
    this.invoices.forEach((element) => {
      if (element.customer.id == id) {
        total += element.amount
      }
    })
    this.firestoreService.updateCustomerAmount(id, total)
  }

  private getInvoices(currentUser) {
    this.firestoreService.getInvoices().subscribe(
      res => {
        this.invoices = []
        res.forEach((invoice: any) => {
          if (invoice.payload.doc.data().ownerId === currentUser.uid) {
            this.invoices.push({
              id: invoice.payload.doc.id,
              amount: invoice.payload.doc.data().amount,
              createdDate: invoice.payload.doc.data().createdDate,
              customer: invoice.payload.doc.data().customer,
              dueDate: invoice.payload.doc.data().dueDate,
              estimateDate: invoice.payload.doc.data().estimateDate,
              expiryDate: invoice.payload.doc.data().expiryDate,
              number: invoice.payload.doc.data().number,
              ownerId: invoice.payload.doc.data().ownerId,
              paidOn: invoice.payload.doc.data().paidOn,
              products: invoice.payload.doc.data().products,
              refNumber: invoice.payload.doc.data().refNumber,
              status: invoice.payload.doc.data().status,
            })
          }
        })
      },
      (error) => (this.errorMessage = <any>error)
    )
  }
}
