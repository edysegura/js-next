'use strict'

const languages = ['pt-BR', 'pt', 'en-US', 'en-US', 'pt-BR', 'jp-co']
const jsSet = new Set(languages)

console.log('Set size: ', jsSet.size)
console.log('-----------------------')

for (const value of jsSet) {
  console.log(value)
}