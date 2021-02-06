import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from '@services/firestore.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Item } from '@models/item';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  providers: [ToastrService]
})
export class AddProductsComponent implements OnInit {
  @Input() id: string

  productForm: FormGroup = this.fb.group({
    description: ['', Validators.required],
    name: ['', Validators.required],
    price: ['', Validators.required],
  })

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    if (this.id != '')
      this.getProduct()
  }

  setSubmitText(): string {
    if (this.id == '')
      return 'Add Product'
    else
      return 'Save changes'
  }

  submitProduct(form: FormGroup) {
    let item = new Item({
      id: '',
      description: form.get('description')?.value,
      name: form.get('name')?.value,
      price: form.get('price')?.value,
      quantity: 1,
      taxable: 16,
    })
    if (this.id == '') {
      this.firestoreService.createProduct(item).then(() => {
        this.toastr.success('Product added')
        this.activeModal.close()
      }).catch(error => {
        console.error('Something went wront creating a product: ', error)
      })
    } else {
      this.firestoreService.updateProduct(this.id, item).then(() => {
        this.toastr.success('Changes saved')
        this.activeModal.close()
      }, (error) => {
        console.error('Something went wrong: ', error);
      })
    }
  }

  private getProduct() {
    this.firestoreService.getProduct(this.id).subscribe((res: any) => {
      this.productForm.patchValue({
        description: res.payload.data().description,
        name: res.payload.data().name,
        price: res.payload.data().price,
      })
    })
  }
}
