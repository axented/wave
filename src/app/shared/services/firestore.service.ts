import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from '@models/customer';
import { Estimate } from '@models/estimate';
import { Invoice } from '@models/invoice';
import { Item } from '@models/item';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  createCustomer(customer: Customer) {
    return this.firestore.collection('customers').add(Object.assign({}, customer))
  }

  createEstimate(estimate: Estimate) {
    return this.firestore.collection('estimates').add(Object.assign({}, estimate))
  }

  createInvoice(invoice: Invoice) {
    return this.firestore.collection('invoices').add(Object.assign({}, invoice))
  }

  createProduct(product: Item) {
    product.id = ''
    return this.firestore.collection('products').add(Object.assign({}, product))
  }

  deleteCustomer(id: string) {
    return this.firestore.collection("customers").doc(id).delete()
  }

  getCustomer(customerId: string) {
    return this.firestore.collection('customers').doc(customerId).snapshotChanges()
  }

  getCustomers() {
    return this.firestore.collection('customers').snapshotChanges()
  }

  getEstimates() {
    return this.firestore.collection('estimates').snapshotChanges()
  }

  getInvoices() {
    return this.firestore.collection('invoices').snapshotChanges()
  }

  getProduct(productId: string) {
    return this.firestore.collection('products').doc(productId).snapshotChanges()
  }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges()
  }

  updateCustomer(customerId: string, customer) {
    return this.firestore.collection('customers').doc(customerId).set(Object.assign({}, customer))
  }

  updateProduct(productId: string, product) {
    product.id = ''
    return this.firestore.collection('products').doc(productId).set(Object.assign({}, product))
  }
}
