export class Billing {
    address: string
    city: string
    country: string
    name: string
    phone: string
    state: string
    zipCode: string

    constructor(attrs: Billing) {
      this.address = attrs.address
      this.city = attrs.city
      this.country = attrs.country
      this.name = attrs.name
      this.phone = attrs.phone
      this.state = attrs.state
      this.zipCode = attrs.zipCode
    }
  }
