import { Customer } from "./customer"
import { Product } from "./product"

export class Invoice {
  id: string
  amount: number
  createdDate: string
  customer: Customer
  dueDate: string
  estimateDate: string
  expiryDate: string
  number: string
  ownerId: string
  paidOn: string
  products: Product[]
  refNumber: string
  status: string

  constructor(attrs?: Invoice) {
    this.id = attrs.id
    this.amount = attrs.amount
    this.createdDate = attrs.createdDate
    this.customer = attrs.customer
    this.dueDate = attrs.dueDate
    this.estimateDate = attrs.estimateDate
    this.expiryDate = attrs.expiryDate
    this.number = attrs.number
    this.ownerId = attrs.ownerId
    this.paidOn = attrs.paidOn
    this.products = attrs.products
    this.refNumber = attrs.refNumber
    this.status = attrs.status
  }
}
