import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Estimate } from '@models/estimate';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '@services/firestore.service';
import { AddEstimatesComponent } from './add-estimates/add-estimates.component';
import { SendEstimateComponent } from './send-estimate/send-estimate.component';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css'],
})
export class EstimatesComponent implements OnInit {
  estimates: Estimate[] = []

  constructor(
    private auth: AngularFireAuth,
    private firestoreService: FirestoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      this.getEstimates(user)
    })
  }

  deleteEstimate(estimate: Estimate) {
    this.firestoreService.deleteEstimate(estimate.id)
  }

  openEstimateModal(id: string) {
    const modalRef = this.modalService.open(
      AddEstimatesComponent,
      {
        animation: true,
        size: 'lg'
      }
    )
    modalRef.componentInstance.id = id
  }

  sendEstimateModal(id: string) {
    const modalRef = this.modalService.open(
      SendEstimateComponent,
      {
        animation: true,
        size: 'md'
      }
    )
    modalRef.componentInstance.id = id
  }

  private getEstimates(currentUser) {
    this.firestoreService.getEstimates().subscribe(
      res => {
        this.estimates = []
        res.forEach((estimate: any) => {
          if (estimate.payload.doc.data().ownerId === currentUser.uid) {
            this.estimates.push({
              id: estimate.payload.doc.id,
              amount: estimate.payload.doc.data().amount,
              customer: estimate.payload.doc.data().customer,
              estimateDate: estimate.payload.doc.data().estimateDate,
              expiryDate: estimate.payload.doc.data().expiryDate,
              number: estimate.payload.doc.data().number,
              ownerId: estimate.payload.doc.data().ownerId,
              products: estimate.payload.doc.data().products,
              refNumber: estimate.payload.doc.data().refNumber,
              status: estimate.payload.doc.data().status,
            })
          }
        })
      },
      (error) => {
        console.error('Something went wrong getting estimates: ', error)
      }
    )
  }
}
