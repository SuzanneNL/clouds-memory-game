const allMemoryCards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let hasFlippedCard = false;



function cardFlip(){
    this.classList.add('flip');

    if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    } else {
    hasFlippedCard = false;
    secondCard = this;

    console.log(firstCard.dataset.number);
    console.log(secondCard.dataset.number);
}};

allMemoryCards.forEach(card => card.addEventListener('click', cardFlip)) 