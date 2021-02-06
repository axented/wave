export class User {
  displayName: string
  email: string

  constructor(attrs: User) {
    this.displayName = attrs.displayName
    this.email = attrs.email
  }
}
