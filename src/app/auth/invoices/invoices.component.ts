import { Component, OnInit } from '@angular/core';
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
    private firestoreService: FirestoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getInvoices()
  }

  openAddInvoiceModal() {
    const modalRef = this.modalService.open(
      AddInvoiceComponent,
      {
        animation: true,
        size: 'lg'
      }
    )
  }

  private getInvoices() {
    this.firestoreService.getInvoices().subscribe(
      res => {
        this.invoices = []
        res.forEach((invoice: any) => {
          this.invoices.push({
            amount: invoice.payload.doc.data().amount,
            createdDate: invoice.payload.doc.data().createdDate,
            customer: invoice.payload.doc.data().customer,
            dueDate: invoice.payload.doc.data().dueDate,
            estimateDate: invoice.payload.doc.data().estimateDate,
            expiryDate: invoice.payload.doc.data().expiryDate,
            items: invoice.payload.doc.data().items,
            number: invoice.payload.doc.data().number,
            paidOn: invoice.payload.doc.data().paidOn,
            refNumber: invoice.payload.doc.data().refNumber,
            status: invoice.payload.doc.data().status,
          })
        })
      },
      (error) => (this.errorMessage = <any>error)
    )
  }
}
