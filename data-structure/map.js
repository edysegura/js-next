'use strict'

const jsMap = new Map()
jsMap.set('key1', 'value1')
jsMap.set('key2', 'value2')
jsMap.set('key3', 'value3')
jsMap.set('key4', 'value4')

const objectKey = { email:'infoedy@gmail.com' }
jsMap.set(objectKey, 'value5')

for (const [ key, value ] of jsMap) {
  console.log(key, value)
}

console.log(jsMap.get(objectKey))