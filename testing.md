# TESTING 
## Table of contents

- [**Automated testing**](#Automated-testing)
    - [Validating](#Validating)
    - [Jasmine](#Jasmine)
- [**Testing user stories**](#Testing-user-stories)
- [**Manual testing**](#Manual-testing)
    - [Options](#Options)
    - [Instructions](#Instructions)
    - [Click counter](#Click-counter)
    - [Play again!](#Play-again!)
    - [Memory cards](#Memory-cards)
    - [Footer](#Footer)
- [**Resolved issues**](#Resolved-issues)
- [**Unresolved issues**](#Unresolved-issues)
- [**Browsers**](#Browsers)
- [**Responsiveness**](#Responsiveness)

To return to the README file, click [here]( https://github.com/SuzanneNL/clouds-memory-game/blob/master/README.md).

## Automated testing
### Validating
- HTML code was validated by the [W3C Markup Validation Service](https://validator.w3.org/) and beautified using [Freeformatter HTML Formatter](https://www.freeformatter.com/html-formatter.html). No errors came up.
- CSS code was validated by the [W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/), and beautified using [Freeformatter CSS Beautifier](https://www.freeformatter.com/css-beautifier.html). No errors came up.
- Javascript code was validated by [JSHint](https://jshint.com/), and beautified using [BeautifyTools Javascript Beautifier](http://beautifytools.com/javascript-beautifier.php). I missed and overused semicolons, which I corrected. No other real errors came up. The beautifier deleted the blank lines, which I put back later for better legibility. 

### Jasmine
I wanted to test my code with Jasmine, but unfortunately the course material and the tutorials I found on youtube were not extensive enough to apply to my code. I would have needed more time to dive into Jasmine testing, which I unfortunately did not have. I therefore manually tested all the functions, and I used console.log very much, for example to check if event listeners worked, or what the number of flipped cards was. I would still like to learn Jasmine one day.

## Testing user stories
As a user....
- **I enjoy looking at pretty pictures of clouds.**
I chose eight pictures of beautiful clouds. Even though the size of the images goes down as the user uses a smaller device, they are still portrayed correctly and visible. But for the best experience, I advice using a tablet or larger device, instead of a mobile phone.  
- **I want to entertain myself by playing a game.**
The game is visually appealing and works correctly. Cards flip when clicked on and are 'kept' when there's a match. The user receives feedback in the form of visual effects, sound effects, a click counter and a win modal. 
- **I want to test my memory and/or knowledge of cloud names.**
The game works as a memory game should, and a user can select the option to play with name cards. 
- **I want to know if the matches I make between cloud images (or images and cloud names) are correct.**
When a match is made, the cards do not flip back, but are 'kept'. Also, a success sound plays. When the final match is made, the win sound plays and a win modal pops up.  
- **I want to be rewarded for my actions or receive feedback while playing this game.** 
When a memory card is flipped, when a match is made, when the game is completed, and when the game is reset, a suiting sound effect plays. The click counter and win modal give feedback to the user on how many clicks are needed to play the game. When a card is clicked, it is 'pressed down' (is becomes just a tad smaller). A check mark appears in front of the option that is selected (images only or images and names). Hover effects show if elements can be clicked on (f.e. one can click on options, but cannot click on 'clicks'). 
- **I want a game that doesn't get stuck or break.**
A user cannot flip more than two cards at the time, because the board locks for a short moment. Clicking fast will maybe cancel the second flip sound (because the first flip sound isn't over when the second card is clicked), but the functionality of the game still works. The game can be reset at any time.  
- **I want to be able to improve myself by keeping track of the number of clicks needed to finish the game.**
At the end, a user can see how many clicks he needed to complete the game. A user can then try again. The counter is reset, and the user can play again. He can then compare his score to how he did earlier.
- **I want to be able to contact the creator of the game through social media.**
The links in the footer direct to the social media pages. 

## Manual testing
Manual testing was done on different devices (see Responsiveness).
### Options
- The 'options' button has a hover effect: the mouse turns into a pointer and the color of the button changes. 
- When a user clicks on the 'options' button, a drop-down menu appears.
- The list items in the drop down menu have a hover effect: the mouse 
turns into a pointer and the color of an item and the text changes. 
- A check mark appears in front of option one ('Images only') when first opening the page.
- The user can switch between the options by clicking on them. A check mark appears in front of the selected option.
- When a user clicks on 'play again', it plays in the option that was last selected. The game doesn't go back to the default setting of option one, like when first opening the page.
- When a user selects another option (f.e. goes from 'Images only' to 'Images and names', the game is reset. You can see this because all the cards flip back. And you can hear a sound effect, which means that the cards are shuffled. 

### Instructions
- The 'instructions' button has a hover effect: the mouse turns into a pointer and the color of the button changes.
- When a user clicks on the 'instructions' button, a modal appears. The modal fits the screen size. 
- When the modal is open, the background is dark. 
- The modal can only be closed by clicking the close button, not by clicking outside of the modal.
### Click counter
- The click counter has no hover effect. A user cannot manipulate the click counter.
- The counter counts up by one for every flipped card.
- The counter doesn't count up when a player tries to click a third card (when two cards are flipped), or when a player clicks on the same card twice. 
- The counter is reset when a user presses 'play again!' or selects another option from the dropdown menu of the 'options' button. 
### Play again!
- The 'play again!' button has a hover effect: the mouse turns into a pointer and the color of the button changes.
- When a user clicks this button, the game is reset. All flipped cards are flipped back, and then they are shuffled (with sound effect). The counter is set to 0. 
### Memory cards
- The cards are 'pressed down' when clicked, which is especially visible when a user clicks a third card that cannot be flipped. 
- A card shows a visual effect op flipping when clicked, which is accompanied by a flip sound, and then shows the image on 'the other side'. 
- A third card cannot be flipped unless the first two cards are a match or have flipped back, even when a user tries to click very fast. 
- When a match is made, cards do not flip back.
- When all the matches have been found, a win sound plays, and a modal appears. 
- All cards are flipped back and shuffled when the game is reset. 
### Footer
- The icons in the footer have a hover effect: the mouse turns into a pointer and the color of the icons change.
- When a user clicks on one of these icons, he is directed to the corresponding website in a new tab.

## Resolved issues
- A user could click on a third card before a match was checked between the first and second card. The solution to this was to lock the board and use the setTimeout function to allow cards to be flipped back. This was explained in the youtube tutorial I used (see Credits in the README file).
- A user could click on a card twice, which gave a match (in the data attribute). The card would remain flipped, because the event listener was removed. This was fixed by adding a condition that checks if, when clicked, 'this' was the first card. This was explained in the youtube tutorial.
- To count the number of clicks, I wrote the following code:
```javascript
let countNum = document.querySelector('.countNum span');
cards.forEach(card => card.addEventListener('click', countUp));

function countUp(){
countNum.innerHTML++;}
```
This however made the clicks count by two. So one click gave the number of two, and two clicks gave the number of four. I realized that there was already an eventListener for clicks (to flip cards), so I added the function countUp to this event listener and deleted the one I had written for the countUp function:
```javascript
cards.forEach(card => card.addEventListener('click', flipCard, countUp));
```
That fixed it.
- There are two options for playing the game. I wanted option one to show all cloud images. And I wanted to show cloud images and name images as option two. First I tried to create an event listener for clicking on option two in the dropdown menu that I created:
```javascript
function test () {
console.log ("test")}
document.querySelector('#option2').addEventListener("click", test);
```
This worked, so I knew the eventListener worked.
Then I tested if I could make images with a certain class disappear.
```javascript
function showNameCards() {
document.querySelector('.cloud-name').classList.add('show-card');
document.querySelector('.cloud-image').classList.add('hide-card');
}

document.querySelector('#option2').addEventListener("click", 	showNameCards);
```
This worked for the first cloud card. I then tried to change querySelector into querySelectorAll, but unfortunately '.add' cannot be combined with querySelectorAll. According to tutor support, it seems like querySelectorAll adds everything together it grabs into a nodeList. I therefore had to write out the querySelector for each card. 
-I had been playing and testing the game with 16 images cards, but had now uploaded 8 name cards. This broke my checkIfGameIsCompleted function. This was because of the condition checking the number of flipped cards (16 at the end) with the number of all the cards:
```javascript	
(allMemoryCards.length == flippedCards.length)
```
And because I had added the name cards, I now had 24 cards. I fixed this by just changing the condition into:
```javascript	
(flippedCards.length == 16)
```
- The success and win sounds played at the same time at the end of the game. I wanted only the win sound to play, so I omitted the success sound for the 8th match by adding a condition:
```javascript
if (flippedCards.length < 16) {
successSound.play()};
```
- When I reset the game or switched levels, the cards would shuffle before they were flipped back, so that a user could see where the cards were going. This was fixed with the setTimeout function, allowing the cards to flip back before they were shuffled.
- The click counter was reset when the game was reset. But I had forgotten to reset the click counter in the win modal. This made the number of clicks go up and up after each game. This was easily fixed by resetting the click counter in the win modal like I had in the click counter itself.
- The footer would go over the game, so I made it stick to the bottom of the page with the following CSS (that I had also used in my MS1):
```css
body {
    min-height: 100vh;
	display: flex;
	flex-direction: column;
}
footer {
    margin-top: auto;
}
```    
This made the footer stick to the bottom but also made white space appear next to and under the page on stretched devices with a width of 320px and under. I already had media queries in place, but adjusting them and making the width of the game and header smaller for these devices fixed this bug.
- In Safari, the cards didn't flip, but glitched. This broke the game completely. I fixed this by prefixing the CSS using [Autoprefixer CSS online](https://autoprefixer.github.io/). 
- I had changed the classes of the images memory cards for consistency, but I had actually changed the class of one of the name-cards. This resulted in breaking the game: when I reset the game, the cards that had been flipped were flipped back, but could then no longer be clicked. Also when resetting the game, not all cards were flipped back. This was fixed by changing back the name of the class of the name-card.

## Unresolved issues
- Ideally, when the page opens, the entire game and all of its buttons are visual on the screen, without having to scroll down. This has been the case on most mobile devices and monitors that I have tested. The page actually fits best on tablets. Unfortunately on the laptops that have been tried out, the 'play again!' button doesn't fit: a user needs to scroll down a bit to see it. A different lay-out (with all the buttons on the side) could be considered or wide screens.  
- When clicking two cards quickly, the second flip sound doesn't play. This is because the first sound (0.43 sec) hasn't finished playing yet.   

## Browsers
The final version of the website was tested in different browsers. The website and game now work correctly in Chrome, Opera, Mozilla, Safari and Microsoft Edge, provided that they have been updated to support ES6. 
It was tricky for me to test in Safari, because I don't have Apple devices. It was pointed out by a friend that the game did not work in Safari, but luckily I was able to resolve this (see Resolved issues). 
The game does not work in Internet Explorer. 

## Responsiveness
Testing to see if the website adjusts itself to the size of the device was mostly done using the Chrome DevTool. With media queries, the size of the header, game, click counter and buttons was adjusted. 
At the final stage, the website was tested on my personal devices (Lenovo Ideapad 110, HP Pavilion P6330NL with Lenco Monitor (1920px x 1080px), Huawei P30, Samsung Galaxy S4 mini), and my family's and friends' devices. The website was displayed as intended. 
