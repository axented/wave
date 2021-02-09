export class Product {
  id: string
  description: string
  name: string
  ownerId: string
  price: number
  quantity: number
  taxable: number

  constructor(attrs: Product) {
    this.id = this.id
    this.description = attrs.description
    this.name = attrs.name
    this.ownerId = attrs.ownerId
    this.price = attrs.price
    this.quantity = attrs.quantity
    this.taxable = attrs.taxable
  }
}
