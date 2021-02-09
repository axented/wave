import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '@services/firestore.service'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from '@models/product';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-send-estimate',
  templateUrl: './send-estimate.component.html',
  styleUrls: ['./send-estimate.component.scss'],
  providers: [ToastrService]
})
export class SendEstimateComponent implements OnInit {
  @Input() id: string

  currentUser: any = ''
  sendForm: FormGroup = this.fb.group({
    from: ['', Validators.required],
    emails: this.fb.array([this.createEmail()]),
    subject: ['', Validators.required],
    message: ['', Validators.required],
    sendToMe: [false],
    attachPDF: [false]
  })
  emailsForm: FormArray = this.fb.array([])

  constructor(
    public activeModal: NgbActiveModal,
    private auth: AngularFireAuth,
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      this.currentUser = user
    })

    if (this.id != '')
      this.getEstimate()
  }

  addEmail() {
    this.emailsForm = this.sendForm.get('emails') as FormArray
    this.emailsForm.push(this.createEmail())
  }

  createEmail(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required]
    })
  }

  removeEmail(emailIndex: number) {
    const to = this.sendForm.get('emails') as FormArray
    to.removeAt(emailIndex)
  }

  submitProduct(form: FormGroup) {
    this.auth.currentUser.then((user) => {
      let product = new Product({
        id: '',
        description: form.get('description')?.value,
        name: form.get('name')?.value,
        ownerId: user.uid,
        price: form.get('price')?.value,
        quantity: 1,
        taxable: 16,
      })
      if (this.id == '') {
        this.firestoreService.createProduct(product).then(() => {
          this.toastr.success('Product added')
          this.activeModal.close()
        }).catch(error => {
          console.error('Something went wront creating a product: ', error)
        })
      } else {
        this.firestoreService.updateProduct(this.id, product).then(() => {
          this.toastr.success('Changes saved')
          this.activeModal.close()
        }, (error) => {
          console.error('Something went wrong: ', error);
        })
      }
    })
  }

  private getEstimate() {
    let once = true
    this.firestoreService.getEstimate(this.id).subscribe((res: any) => {
      if (once) {
        this.sendForm.patchValue({
          from: this.currentUser.email,
          subject: 'Estimate #' + res.payload.data().number + ' from Axented',
        })
      }
    })
  }
}
