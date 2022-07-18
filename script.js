'use strict';

let playerContainer = document.querySelector('.player__container');
let winLine = document.querySelector('.win__line');
let playerArrow = document.querySelector('.player-arrow');
let arrow = document.querySelector('.arrow');
let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');
let time = document.querySelector('.time');
let saveBestTime = document.querySelector('.add__best-time');
let restartBtn = document.querySelector('.restart-btn');
let greetingsText = document.querySelector('.greeting');
let press = document.querySelector('.press');


let bestTime = document.querySelector('.best__time');

/* OPACITY FOR START BUTTON
let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');

h1.addEventListener('click', function() {
    h1.classList.add('opacity');
    h2.classList.remove('opacity');
});*/

/*let line =*/ 

const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min * 1) + min);
const randomNumber = () => `${randomInt(1, 11)}rem`;    

 
arrow.addEventListener('click', function(e) {
        this.style.marginBottom = randomNumber();

        if(arrow.style.marginBottom === '10rem') {
            winLine.style.color = 'hsla(142, 82%, 41%, 1)';
            playerArrow.style.borderTop = '2px dotted hsla(142, 82%, 41%, 1)';
            winLine.textContent = 'YOU WON!';
            clear();

         }
 });

 let timer;

 const timer2 = startBtn.addEventListener('click', function() {
  let sec = 0;
  
  timer = setInterval(function ecFung() {
    time.innerHTML = ''+sec;
    sec++;

    return ecFung;
  }(), 1000);

  if(timer) {
    startBtn.classList.add('hidden');
  };
});


/*
startBtn.addEventListener('click', function() {
  startBtn.classList.add('dis-none');
});*/

const clear = function() {
  clearInterval(timer);
};

resetBtn.addEventListener('click', function() {
  time.textContent = '0';

  clear();

  startBtn.classList.remove('hidden');
});

restartBtn.addEventListener('click', function() {
  winLine.style.color = '#fff';
  playerArrow.style.borderTop = '2px dotted #fff';
  winLine.textContent = 'Winning Line';
  arrow.style.marginBottom = '0';
  time.textContent = '0';
  startBtn.classList.remove('hidden');

  clear();
});

press.addEventListener('click', function() {
  restartBtn.classList.remove('hidden');
  playerContainer.classList.remove('hidden');
  greetingsText.classList.add('hidden');
  document.querySelector('body').style.backgroundColor = ' hsla(225, 39%, 24%, 1)';
});