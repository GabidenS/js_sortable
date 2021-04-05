'use strict';

console.log('hello');
let allDataObject;
const conatinerElement = document.querySelector('.container');
let activeCard = -1;
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
  for (let i = 0; i < 100; i++) {
    const imageLink = objectData[i].images.md;
    const newCard = document.createElement('div');
    const newImg = document.createElement('img');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    newCard.classList.add(`card-${i}`, 'divCard');
    newImg.classList.add('imgCard', `img-${i}`);
    newImg.src = imageLink;
    newCard.appendChild(overlay);
    newCard.appendChild(newImg);

    conatinerElement.appendChild(newCard);

    document.querySelector(`.img-${i}`).addEventListener('click', function () {
      //   const card = document.querySelector(`.card-${i}`);
      //   const overlay = document.createElement('div');
      //   overlay.classList.add('overlay');

      //   card.appendChild(overlay);

      //   const x = document.querySelector(`.img-${i}`).getBoundingClientRect().x;
      //   const y = document.querySelector(`.img-${i}`).getBoundingClientRect().y;
      //   activeCard = i;
      //   const width = document.querySelector(`.img-${i}`).getBoundingClientRect()
      //     .width;
      //   const height = document.querySelector(`.img-${i}`).getBoundingClientRect()
      //     .height;
      //   console.log(document.querySelector(`.img-${i}`).getBoundingClientRect());
      //   let overlay = document.querySelector('.overlay');

      //   overlay.style.left = x + 'px';
      //   overlay.style.top = y + 'px';
      //   overlay.style.height = height + 'px';
      //   overlay.style.width = width + 'px';

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
const resetOverlay = function () {
  if (activeCard != -1) {
    const x = document
      .querySelector(`.img-${activeCard}`)
      .getBoundingClientRect().x;
    const y = document
      .querySelector(`.img-${activeCard}`)
      .getBoundingClientRect().y;
    const width = document
      .querySelector(`.img-${activeCard}`)
      .getBoundingClientRect().width;
    const height = document
      .querySelector(`.img-${activeCard}`)
      .getBoundingClientRect().height;
    let overlay = document.querySelector('.overlay');

    overlay.style.left = x + 'px';
    overlay.style.top = y + 'px';
    overlay.style.height = height + 'px';
    overlay.style.width = width + 'px';

    overlay.classList.add('overlay--on');
  }
};
window.addEventListener('resize', resetOverlay);
document.addEventListener('scroll', resetOverlay);
