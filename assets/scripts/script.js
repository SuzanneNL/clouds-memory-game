/*This basis of this game was created with the help of a youtube tutorial (https://www.youtube.com/watch?v=ZniVgo8U7ek). 
The game was then styled and changed to make it more interesting and interactive for the user*/

/*Variables*/
const allMemoryCards = document.querySelectorAll('.memory-card');
const flipSound = new Audio("assets/audio/card-flip.flac");
const successSound = new Audio("assets/audio/success.wav");
const winSound = new Audio("assets/audio/win.wav");
const shuffleSound = new Audio("assets/audio/shuffle.wav");
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let flippedCards;
let countNum = document.querySelector('.counter span');
let finalCount = document.querySelector('#final-count');

/*This function shuffles the cards, making them switch positions. This function is called first."*/
function shuffle() {
	allMemoryCards.forEach(card => {
		let randomPosition = Math.floor(Math.random() * 16);
		card.style.order = randomPosition;
	});
}

shuffle();

/*This event listener checks if a memory card is clicked and then runs the functions cardFlip and countUp.*/
allMemoryCards.forEach(card => card.addEventListener('click', cardFlip, countUp));

/*This function first checks if the board is locked. If so, it doesn't run.
Then it checks if the user clicks twice on the same card. Tn that case this function is not executed.
Clicked cards get the class of 'flip'. 
A sound is played when a card is clicked and flips, and the countUp function is run.
The condition concerning hasFlippedCard checks if the card that's clicked is the first or second card.
After it has identified the first and second clicked cards, the function matchCheck is executed.*/
function cardFlip() {
	if(lockBoard) return;
	if(this === firstCard) return;
	this.classList.add('flip');
	flippedCards = document.querySelectorAll('.flip');
	countUp();
	flipSound.play();
	if(!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
	} else {
		hasFlippedCard = false;
		secondCard = this;
		matchCheck();
	}
}

/*This function counts the number of clicks. Because of its position in cardFlip, doubleclicking a card doesn't count. Only flips count. 
The number is shown in the click counter and in the win-modal*/
function countUp() {
	countNum.innerHTML++;
	finalCount.innerHTML++;
}

/*This function checks if the first and second card match, by comparing the datasets. 
If so, the cards are frozen, and a success sound plays. They will not be flipped back. Also it runs a function to check if the game is completed.
If there's no match, a function runs that makes the cards flip back.*/
function matchCheck() {
	if(firstCard.dataset.number === secondCard.dataset.number) {
		freezeCards();
		if(flippedCards.length < 16) {
			successSound.play();
		}
		checkIfGameIsCompleted();
	} else {
		cardsFlipBack();
	}
}

/*This function disables cards from flipping back by removing the eventlistener.
It then runs a function that resets the board.*/
function freezeCards() {
	firstCard.removeEventListener('click', cardFlip);
	secondCard.removeEventListener('click', cardFlip);
	resetBoard();
}

/*This function makes the cards flip back (when there's no match), by removing the class of 'flip'.
However, because of a time-out, the board is locked, making it impossible for a user to flip a third card, 
until the first and second card have flipped back.*/
function cardsFlipBack() {
	lockBoard = true;
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		lockBoard = false;
		resetBoard();
	}, 1500);
}

/*This function resets the values of the variables hasFlippedCard, lockBoard, firstCard and secondCard,
so the user can continue playing.*/
function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

/*This function checks if the game is completed, by comparing the total number of memory cards with the number of flipped cards.
When the game is completed, a win sound is played.
Also, the class of visible is added to the win-modal, so a modal shows, saying "you win! and showing the total number of clicks"*/
function checkIfGameIsCompleted() {
	if(flippedCards.length == 16) {
		winSound.play();
		document.querySelector('.win-modal').classList.add('visible');
	}
}

/*This arrow function toggles the class 'modal-hidden' to the div with a class of 'modal', to hide or show the Instructions modal.
This occurst when (see the event listeners) the button Instructions or the close button in the modal are clicked.*/
const toggleModal = () => {
	document.querySelector('.modal').classList.toggle('modal-hidden');
};

document.querySelector('#show-modal').addEventListener('click', toggleModal);
document.querySelector('.close-button').addEventListener('click', toggleModal);

/*This section removes the class 'visible' from the win modal, so that the win modal can disappear when a user on the close button*/
const closeWinModal = () => {
	document.querySelector('.win-modal').classList.remove('visible');
};

document.querySelector('#win-modal-close-button').addEventListener('click', closeWinModal);

/*There are two ways to play this game. Either with images only (option 1, the default setting), or with images and names (option 2).
A user can select option 2. In that case, the game is reset, and after a short time-out the second cloud images are replaced by cloud name cards*/
function resetAndShowNameCards() {
	resetGame();
	setTimeout(() => {
		showNameCards();
	}, 600);
}

/*This function replaces the second cloud images with the name cards, and adds a check mark to the second option*/
function showNameCards() {
	document.querySelector('.second-cloud-image1').classList.add('hide-card');
	document.querySelector('.cloud-name1').classList.add('show-card');
	document.querySelector('.second-cloud-image2').classList.add('hide-card');
	document.querySelector('.cloud-name2').classList.add('show-card');
	document.querySelector('.second-cloud-image3').classList.add('hide-card');
	document.querySelector('.cloud-name3').classList.add('show-card');
	document.querySelector('.second-cloud-image4').classList.add('hide-card');
	document.querySelector('.cloud-name4').classList.add('show-card');
	document.querySelector('.second-cloud-image5').classList.add('hide-card');
	document.querySelector('.cloud-name5').classList.add('show-card');
	document.querySelector('.second-cloud-image6').classList.add('hide-card');
	document.querySelector('.cloud-name6').classList.add('show-card');
	document.querySelector('.second-cloud-image7').classList.add('hide-card');
	document.querySelector('.cloud-name7').classList.add('show-card');
	document.querySelector('.second-cloud-image8').classList.add('hide-card');
    document.querySelector('.cloud-name8').classList.add('show-card');
    document.querySelector('.option1').classList.add('hide-check');
    document.querySelector('.option2').classList.remove('hide-check');
}

/*This is the event listener that checks if option2 is selected, and then runs the resetAndShowNameCards function*/
document.querySelector('#option2').addEventListener("click", resetAndShowNameCards);

/*There are two ways to play this game. Either with images only (option 1, the default setting), or with images and names (option 2).
A user can select option 1. In that case, the game is reset, and after a short time-out the name cards are replaced by cloud images*/
function resetAndShowImageCards() {
	resetGame();
	setTimeout(() => {
		showImageCards();
	}, 600);
}

/*This function replaces the name cards with the second image cards, and adds a check mark to the first option*/
function showImageCards() {
	document.querySelector('.second-cloud-image1').classList.remove('hide-card');
	document.querySelector('.cloud-name1').classList.remove('show-card');
	document.querySelector('.second-cloud-image2').classList.remove('hide-card');
	document.querySelector('.cloud-name2').classList.remove('show-card');
	document.querySelector('.second-cloud-image3').classList.remove('hide-card');
	document.querySelector('.cloud-name3').classList.remove('show-card');
	document.querySelector('.second-cloud-image4').classList.remove('hide-card');
	document.querySelector('.cloud-name4').classList.remove('show-card');
	document.querySelector('.second-cloud-image5').classList.remove('hide-card');
	document.querySelector('.cloud-name5').classList.remove('show-card');
	document.querySelector('.second-cloud-image6').classList.remove('hide-card');
	document.querySelector('.cloud-name6').classList.remove('show-card');
	document.querySelector('.second-cloud-image7').classList.remove('hide-card');
	document.querySelector('.cloud-name7').classList.remove('show-card');
	document.querySelector('.second-cloud-image8').classList.remove('hide-card');
    document.querySelector('.cloud-name8').classList.remove('show-card');
    document.querySelector('.option1').classList.remove('hide-check');
    document.querySelector('.option2').classList.add('hide-check');
}

/*This is the event listener that checks if option1 is selected, and then runs the resetAndShowImageCards function*/
document.querySelector('#option1').addEventListener("click", resetAndShowImageCards);

/*This function plays a shuffle sound. It resets the game by first removing all flip classes. It then resets the counters to 0. 
It adds the event listeners that were removed due to matches. It resets the board, and shuffles the cards after a short time-out*/
function resetGame() {
    shuffleSound.play();
	document.querySelector('.first-cloud-image1').classList.remove('flip');
	document.querySelector('.first-cloud-image2').classList.remove('flip');
	document.querySelector('.first-cloud-image3').classList.remove('flip');
	document.querySelector('.first-cloud-image4').classList.remove('flip');
	document.querySelector('.first-cloud-image5').classList.remove('flip');
	document.querySelector('.first-cloud-image6').classList.remove('flip');
	document.querySelector('.first-cloud-image7').classList.remove('flip');
	document.querySelector('.first-cloud-image8').classList.remove('flip');
	document.querySelector('.second-cloud-image1').classList.remove('flip');
	document.querySelector('.second-cloud-image2').classList.remove('flip');
	document.querySelector('.second-cloud-image3').classList.remove('flip');
	document.querySelector('.second-cloud-image4').classList.remove('flip');
	document.querySelector('.second-cloud-image5').classList.remove('flip');
	document.querySelector('.second-cloud-image6').classList.remove('flip');
	document.querySelector('.second-cloud-image7').classList.remove('flip');
	document.querySelector('.second-cloud-image8').classList.remove('flip');
	document.querySelector('.cloud-name1').classList.remove('flip');
	document.querySelector('.cloud-name2').classList.remove('flip');
	document.querySelector('.cloud-name3').classList.remove('flip');
	document.querySelector('.cloud-name4').classList.remove('flip');
	document.querySelector('.cloud-name5').classList.remove('flip');
	document.querySelector('.cloud-name6').classList.remove('flip');
	document.querySelector('.cloud-name7').classList.remove('flip');
	document.querySelector('.cloud-name8').classList.remove('flip');
    document.querySelector('.counter span').innerHTML = 0;
    document.querySelector('#final-count').innerHTML = 0;
	allMemoryCards.forEach(card => card.addEventListener('click', cardFlip));
	resetBoard();
	setTimeout(() => {
		shuffle();
	}, 600);
}

/*When the button 'Play again' is clicked, the function resetGame runs*/
document.querySelector('#play-again').addEventListener("click", resetGame);