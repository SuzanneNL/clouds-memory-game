const allMemoryCards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

function cardFlip(){
    if (lockBoard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    } else {
    hasFlippedCard = false;
    secondCard = this;

    matchCheck();
    }
}

function matchCheck(){
    if (firstCard.dataset.number === secondCard.dataset.number) {
        freezeCards();
    } else {
        cardsFlipBack();
}}

function freezeCards(){
    firstCard.removeEventListener('click', cardFlip);
    secondCard.removeEventListener('click', cardFlip);
}
    
function cardsFlipBack(){
    lockBoard = true;
    setTimeout(()=> {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    }, 1500);}

allMemoryCards.forEach(card => card.addEventListener('click', cardFlip)) 