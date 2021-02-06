export class Expense {
  category: string
  customer_name: string
  customer_img: string
  expense_date: string
  notes: string
  amount: number
  status: string

  constructor(attrs: Expense) {
    this.category = attrs.category
    this.customer_name = attrs.customer_name
    this.customer_img = attrs.customer_img
    this.expense_date = attrs.expense_date
    this.notes = attrs.notes
    this.amount = attrs.amount
    this.status = attrs.status
  }
}
