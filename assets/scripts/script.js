const allMemoryCards = document.querySelectorAll('.memory-card');

function cardFlip() {
    this.classList.toggle('flip');
}

allMemoryCards.forEach(card => card.addEventListener('click', cardFlip)) 