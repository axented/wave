import { Customer } from "./customer"
import { Item } from "./item"

export class Invoice {
  amount: number
  createdDate: string
  customer: Customer
  dueDate: string
  estimateDate: string
  expiryDate: string
  items: Item[]
  number: string
  paidOn: string
  refNumber: string
  status: string

  constructor(attrs: Invoice) {
    this.amount = attrs.amount
    this.createdDate = attrs.createdDate
    this.customer = attrs.customer
    this.dueDate = attrs.dueDate
    this.estimateDate = attrs.estimateDate
    this.expiryDate = attrs.expiryDate
    this.items = attrs.items
    this.number = attrs.number
    this.paidOn = attrs.paidOn
    this.refNumber = attrs.refNumber
    this.status = attrs.status
  }
}
