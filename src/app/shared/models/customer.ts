import { Billing } from './billing'
import { Shipping } from './shipping'

export class Customer {
  id: string
  amountDue: number
  billing: Billing
  contactName: string
  currency: string
  email: string
  img: string
  name: string
  ownerId: string
  phone: string
  registeredOn: string
  role: string
  shipping: Shipping
  status: string
  website: string

  constructor(attrs: Customer) {
    this.id = attrs.id
    this.amountDue = attrs.amountDue
    this.billing = attrs.billing
    this.contactName = attrs.contactName
    this.currency = attrs.currency
    this.email = attrs.email
    this.img = attrs.img
    this.name = attrs.name
    this.ownerId = attrs.ownerId
    this.phone = attrs.phone
    this.registeredOn = attrs.registeredOn
    this.role = attrs.role
    this.shipping = attrs.shipping
    this.status = attrs.status
    this.website = attrs.website
  }
}
