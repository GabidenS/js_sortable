'use strict'

console.log('hello')
let allDataObject

const all = fetch(
  'https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json'
)
  .then((response) => response.json()) // parse the response from JSON
  .then((data) => {
    allDataObject = data
    console.log(allDataObject[1].images.sm)
    addImage(allDataObject)
  })
const conatinerElement = document.querySelector('.container')

const addImage = function (objectData) {
  for (let i = 0; i < 100; i++) {
    const imageLink = objectData[i].images.sm
    const newCard = document.createElement('img')
    newCard.classList.add('card')
    newCard.src = imageLink
    conatinerElement.appendChild(newCard)
  }
}

// conatinerElement.style.gridTemplateColumns = 'repeat(5, 1fr)'
