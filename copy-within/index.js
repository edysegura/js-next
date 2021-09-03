const names = ['Edy', 'Lidy', 'Davi', 'Sofia']

const indexThatWillBeReplaced = 0
const startIndex = 2
const endIndex = 3

names.copyWithin(indexThatWillBeReplaced, startIndex, endIndex)
console.log(names) // [ 'Davi', 'Lidy', 'Davi', 'Sofia' ]

// references: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin