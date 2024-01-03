const myObject = {
  logs: [],
  name: 'Edy Segura',
  email: 'email@email.com',
}

const myProxyObject = new Proxy(myObject, {
  set: (target, property, value) => {
    console.log(`Changed ${property} from ${target[property]} to ${value}`)
    target.logs.push({
      property,
      from: target[property],
      to: value,
    })
    Reflect.set(target, property, value)
  },
})

myProxyObject.name = 'Other name'
myProxyObject.name = 'Segura, Edy'
myProxyObject.email = 'something.else@email.com'

console.log(JSON.stringify(myObject, null, 2))
