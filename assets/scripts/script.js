const allMemoryCards = document.querySelectorAll('.memory-card');
const flipSound = new Audio("assets/audio/card-flip.flac");
const successSound = new Audio("assets/audio/success.wav");
const winSound = new Audio("assets/audio/win.wav");
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let flippedCards;
let countNum = document.querySelector('.counter span');

/*If the board is locked, or if the user clicks twice on the same card, this function is not executed.
Clicked cards get the class of 'flip'. A sound is played when a card is clicked and flips, and the countUp function is run.
The condition concerning hasFlippedCard checks it the card that's clicked is the first or second card.
After the selection of the first and second card, the function matchCheck checks if they match.*/
function cardFlip(){
    if (lockBoard) return;
    if (this===firstCard) return;
    this.classList.add('flip');
    flippedCards = document.querySelectorAll('.flip')
    countUp();
    flipSound.play();

    if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    } else {
    hasFlippedCard = false;
    secondCard = this;

    matchCheck();
    }
}

/*This function counts the number of clicks. Because of its position in cardFlip, doubleclicking a card doesn't count. Only flips count.*/
function countUp(){
	countNum.innerHTML++;}

/*This function checks if the first and second card match, by comparing the datasets. 
If so, the cards are frozen, and a success sound plays. Also it runs a function to check if the game is completed.
If there's no match, a function runs that makes the cards flip back.*/
function matchCheck(){
    if (firstCard.dataset.number === secondCard.dataset.number) {
        freezeCards();
        successSound.play();
        checkIfGameIsCompleted()
    } else {
        cardsFlipBack();
}}

/*This function disables cards from flipping back by removing the eventlistener.
It then runs a function that resets the board.*/
function freezeCards(){
    firstCard.removeEventListener('click', cardFlip);
    secondCard.removeEventListener('click', cardFlip);
    resetBoard();
}

/*This function makes the cards flip back (when there's no match), by removing the class of 'flip'.
However, because of a time-out the board is locked, making it impossible for a user to flip a third card, 
until the first and second card have flipped back.*/
function cardsFlipBack(){
    lockBoard = true;
    setTimeout(()=> {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    resetBoard();
    }, 1500);}

/*This function resets the values of the variables hasFlippedCard, lockBoard, firstCard and secondCard,
so the user can continue playing.*/
function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/*This function shuffles the cards, making them switch positions. This function runs first."*/
(function shuffle() {
    allMemoryCards.forEach(card=>{
        let randomPosition = Math.floor(Math.random()*14);
        card.style.order = randomPosition;
    });
})();

/*This function checks if the game is completed, by comparing the total number of memory cards with the number of flipped cards.
When the game is completed, a win sound is played.*/

function checkIfGameIsCompleted() {
    if (allMemoryCards.length == flippedCards.length) {
    winSound.play()}};

/*This event listener checks if a card is flipped and then runs the functions cardFlip and countUp.*/
allMemoryCards.forEach(card => card.addEventListener('click', cardFlip, countUp)) 