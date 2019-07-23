'use strict'

class MyService {
  #myPrivateMember = 'this is private'
  myPublicMember = "this is public"

  // get myPrivateMember() {
  //   return this.#myPrivateMember
  // }

  constructor() {
    console.log('Accessing my private member: ' + this.#myPrivateMember)
  }
}

const service = new MyService()
console.log(service.myPublicMember)
console.log(service.myPrivateMember)
