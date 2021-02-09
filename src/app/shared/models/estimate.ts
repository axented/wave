import { Customer } from './customer'
import { Product } from './product'

export class Estimate {
  id: string
  amount: number
  customer: Customer
  estimateDate: string
  expiryDate: string
  number: string
  ownerId: string
  products: Product[]
  refNumber: string
  status: string

  constructor(attrs?: Estimate) {
    this.id = attrs.id
    this.amount = attrs.amount
    this.customer = attrs.customer
    this.estimateDate = attrs.estimateDate
    this.expiryDate = attrs.expiryDate
    this.number = attrs.number
    this.ownerId = attrs.ownerId
    this.products = attrs.products
    this.refNumber = attrs.refNumber
    this.status = attrs.status
  }
}
