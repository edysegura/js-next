const person = {
  firstName: 'Edy',
  lastName: 'Segura'
}

const showName = ({ firstName:name = 'no-name' }) => console.log(name)

showName(person)