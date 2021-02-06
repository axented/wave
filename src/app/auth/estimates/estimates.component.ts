import { Component, OnInit } from '@angular/core';
import { Estimate } from '@models/estimate';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '@services/firestore.service';
import { AddEstimatesComponent } from './add-estimates/add-estimates.component';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css'],
})
export class EstimatesComponent implements OnInit {
  estimates: Estimate[] = []
  errorMessage?: string;

  constructor(
    private firestoreService: FirestoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getEstimates()
  }

  openAddEstimateModal() {
    const modalRef = this.modalService.open(
      AddEstimatesComponent,
      {
        animation: true,
        size: 'lg'
      }
    )
  }

  private getEstimates() {
    this.firestoreService.getEstimates().subscribe(
      res => {
        this.estimates = []
        res.forEach((estimate: any) => {
          this.estimates.push({
            amount: estimate.payload.doc.data().amount,
            customer: estimate.payload.doc.data().customer,
            estimateDate: estimate.payload.doc.data().estimateDate,
            expiryDate: estimate.payload.doc.data().expiryDate,
            items: estimate.payload.doc.data().items,
            number: estimate.payload.doc.data().number,
            refNumber: estimate.payload.doc.data().refNumber,
            status: estimate.payload.doc.data().status,
          })
        })
      },
      (error) => (this.errorMessage = <any>error)
    )
  }
}
