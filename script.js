'use strict';

console.log('hello');
let allDataObject;
const conatinerElement = document.querySelector('.container');

const all = fetch(
  'https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json'
)
  .then((response) => response.json()) // parse the response from JSON
  .then((data) => {
    allDataObject = data;
    console.log(allDataObject[1].images.md);
    addImage(allDataObject);
  });

const addImage = function (objectData) {
  for (let i = 0; i < 200; i++) {
    const imageLink = objectData[i].images.md;
    const newCard = document.createElement('img');
    newCard.classList.add('card', `img-${i}`);
    newCard.src = imageLink;
    conatinerElement.appendChild(newCard);
    document
      .querySelector(`.img-${i}`)
      .addEventListener('mouseover', function () {
        const x = document.querySelector(`.img-${i}`).getBoundingClientRect().x;
        const y = document.querySelector(`.img-${i}`).getBoundingClientRect().y;
        const width = document
          .querySelector(`.img-${i}`)
          .getBoundingClientRect().width;
        const height = document
          .querySelector(`.img-${i}`)
          .getBoundingClientRect().height;
        console.log(
          document.querySelector(`.img-${i}`).getBoundingClientRect()
        );
        let overlay = document.querySelector('.overlay');

        overlay.style.left = x + 'px';
        overlay.style.top = y + 'px';
        overlay.style.height = height + 'px';
        overlay.style.width = width + 'px';

        overlay.classList.add('overlay--on');
      });
  }
};

const addOverlay = function () {
  const newDiv = document.createElement('div');
  newDiv.classList.add('overlay');
  document.body.appendChild(newDiv);
};
const overlayOff = function () {
  let overlay = document.querySelector('.overlay');
  overlay.classList.remove('overlay--on');
};
window.addEventListener('resize', overlayOff);
document.addEventListener('scroll', overlayOff);
