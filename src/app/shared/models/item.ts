export class Item {
  id: string
  description: string
  name: string
  price: number
  quantity: number
  taxable: number

  constructor(attrs: Item) {
    this.id = this.id
    this.description = attrs.description
    this.name = attrs.name
    this.price = attrs.price
    this.quantity = attrs.quantity
    this.taxable = attrs.taxable
  }
}
