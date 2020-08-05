const allMemoryCards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

function cardFlip(){
    if (lockBoard) return;
    if (this===firstCard) return;
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

allMemoryCards.forEach(card => card.addEventListener('click', cardFlip)) 