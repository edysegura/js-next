const myObject = {
  name: 'Edy Segura',
  email: 'email@email.com',
}

const myProxyObject = new Proxy(myObject, {
  get: (target, property) => {
    console.log(`The value of ${property} is ${Reflect.get(target, property)}`)
  },
  set: (target, property, value) => {
    console.log(`Changed ${property} from ${target[property]} to ${value}`)
    Reflect.set(target, property, value)
  },
})

myProxyObject.name // will output: The value of name is Edy Segura
myProxyObject.email = 'something.else@email.com'

console.log({ myObject })
