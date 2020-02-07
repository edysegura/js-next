'use strict'

function getRequest(message) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(message)
  }
}

function showOutput(data) {
  const output = document.querySelector('pre')
  output.textContent = JSON.stringify(data, null, 2)
}

async function main() {
  const request = getRequest({ message: 'Does this work?' })
  const response = await fetch('https://httpbin.org/post', request)
  const data = await response.json()
  showOutput(data)
}

main()