'use strict'

const jsMap = new Map()
jsMap.set('key1', 'value1')
jsMap.set('key2', 'value2')
jsMap.set('key3', 'value3')
jsMap.set('key4', 'value4')

// map key can be an Object
const objectKey = { email:'infoedy@gmail.com' }
jsMap.set(objectKey, 'value5')

// it also can be a function
const functionKey = () => 'key5'
jsMap.set(functionKey, 'value6')

console.log('Map size: ', jsMap.size)
console.log('-----------------------')

for (const [ key, value ] of jsMap) {
  console.log(key, value)
}

console.log('Retrieving values')
console.log('-----------------------')
console.log('Object Key: ', jsMap.get(objectKey))
console.log('Function Key: ', jsMap.get(functionKey))