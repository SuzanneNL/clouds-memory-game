const allMemoryCards = document.querySelectorAll('.memory-card');
const flipSound = new Audio("assets/audio/card-flip.flac");
const successSound = new Audio("assets/audio/success.wav");
const winSound = new Audio("assets/audio/win.wav");
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let flippedCards;
let countNum = document.querySelector('.counter span');


function cardFlip(){
    if (lockBoard) return;
    if (this===firstCard) return;
    this.classList.add('flip');
    flippedCards = document.querySelectorAll('.flip')
    flipSound.play();
    countUp();

    if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    } else {
    hasFlippedCard = false;
    secondCard = this;

    matchCheck();
    }
}

function countUp(){
	countNum.innerHTML++;}

function matchCheck(){
    if (firstCard.dataset.number === secondCard.dataset.number) {
        freezeCards();
        successSound.play();
        checkIfGameIsCompleted()
    } else {
        cardsFlipBack();
}}

function freezeCards(){
    firstCard.removeEventListener('click', cardFlip);
    secondCard.removeEventListener('click', cardFlip);
    resetBoard();
}
    
function cardsFlipBack(){
    lockBoard = true;
    setTimeout(()=> {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    resetBoard();
    }, 1500);}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    allMemoryCards.forEach(card=>{
        let randomPosition = Math.floor(Math.random()*14);
        card.style.order = randomPosition;
    });
})();

function checkIfGameIsCompleted() {
    if (allMemoryCards.length == flippedCards.length) {
    winSound.play()}};


allMemoryCards.forEach(card => card.addEventListener('click', cardFlip, countUp)) 