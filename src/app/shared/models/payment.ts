export class Payment {
  ref_id: string
  customer_name: string
  customer_img: string
  date: string
  amount: number
  payment_method: string

  constructor(attrs: Payment) {
    this.ref_id = attrs.ref_id
    this.customer_name = attrs.customer_name
    this.customer_img = attrs.customer_img
    this.date = attrs.date
    this.amount = attrs.amount
    this.payment_method = attrs.payment_method
  }
}
