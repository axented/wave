import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductsComponent } from './add-products/add-products.component';
import { FirestoreService } from '@services/firestore.service';
import { Product } from '@models/product';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-products-services',
  templateUrl: './products-services.component.html',
  styleUrls: ['./products-services.component.css'],
})
export class ProductsServicesComponent implements OnInit {
  products: Product[] = []
  errorMessage: string = ''

  constructor(
    private auth: AngularFireAuth,
    private firestoreService: FirestoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.auth.currentUser.then((user) => {
      this.getProducts(user)
    })
  }

  deleteProduct(product: Product) {
    this.firestoreService.deleteProduct(product.id)
  }

  filter() {
  }

  openAddProductsModal(id: string) {
    const modalRef = this.modalService.open(
      AddProductsComponent,
      {
        animation: true,
        size: 'md'
      }
    )
    modalRef.componentInstance.id = id
  }

  private getProducts(currentUser) {
    this.firestoreService.getProducts().subscribe(
      res => {
        this.products = []
        res.forEach((product: any) => {
          if (product.payload.doc.data().ownerId === currentUser.uid) {
            this.products.push({
              id: product.payload.doc.id,
              description: product.payload.doc.data().description,
              name: product.payload.doc.data().name,
              ownerId: product.payload.doc.data().ownerId,
              price: product.payload.doc.data().price,
              quantity: product.payload.doc.data().quantity,
              taxable: product.payload.doc.data().taxable,
            })
          }
        })
      },
      (error) => (this.errorMessage = <any>error)
    )
  }
}
