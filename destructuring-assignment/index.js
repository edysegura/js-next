'use strict'

const onePerson = {
  firstName: 'Edy',
  lastName: 'Segura'
}

const anotherPerson = {
  lastName: 'Segura'
}

const showName = ({ firstName:name = 'No name' }) =>
  console.log(name)

showName(onePerson) // Edy
showName(anotherPerson) // No name