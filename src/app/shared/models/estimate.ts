import { Customer } from './customer'
import { Item } from './item'

export class Estimate {
  amount: number
  customer: Customer
  estimateDate: string
  expiryDate: string
  items: Item[]
  number: string
  refNumber: string
  status: string

  constructor(attrs: Estimate) {
    this.amount = attrs.amount
    this.customer = attrs.customer
    this.estimateDate = attrs.estimateDate
    this.expiryDate = attrs.expiryDate
    this.items = attrs.items
    this.number = attrs.number
    this.refNumber = attrs.refNumber
    this.status = attrs.status
  }
}
