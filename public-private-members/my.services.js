class MyService {
  #myPrivateMember = 'this is private'
  myPublicMember = "this is public"
}

const service = new MyService()
console.log(service.myPublicMember)