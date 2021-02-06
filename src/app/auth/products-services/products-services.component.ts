import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductsComponent } from './add-products/add-products.component';
import { FirestoreService } from '@services/firestore.service';
import { Item } from '@models/item';

@Component({
  selector: 'app-products-services',
  templateUrl: './products-services.component.html',
  styleUrls: ['./products-services.component.css'],
})
export class ProductsServicesComponent implements OnInit {
  products: Item[] = []
  errorMessage: string = ''

  constructor(
    private firestoreService: FirestoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  filter() {
  }

  openAddProductsModal(id: string) {
    const modalRef = this.modalService.open(
      AddProductsComponent,
      {
        animation: true,
        size: 'lg'
      }
    )
    modalRef.componentInstance.id = id
  }

  private getProducts() {
    this.firestoreService.getProducts().subscribe(
      res => {
        this.products = []
        res.forEach((item: any) => {
          this.products.push({
            id: item.payload.doc.id,
            description: item.payload.doc.data().description,
            name: item.payload.doc.data().name,
            price: item.payload.doc.data().price,
            quantity: item.payload.doc.data().quantity,
            taxable: item.payload.doc.data().taxable,
          })
        })
      },
      (error) => (this.errorMessage = <any>error)
    )
  }
}
