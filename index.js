let player = {
    name: "Per",
    chips: 145
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let alive = false;

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el");

playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
    const randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) return 11;
    if (randomNumber > 10) return 10;

    return randomNumber;
}

function startGame() {
    alive = true;
    hasBlackJack = false;

    const firstCard = getRandomCard();
    const secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ");
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?";
    } 
    else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!";
        hasBlackJack = true;
    } 
    else {
        messageEl.textContent = "You're out of the game!";
        alive = false;
    }
}

function newCard() {
    if (!alive || hasBlackJack) return;

    const card = getRandomCard();
    cards.push(card);
    sum += card;

    renderGame();
}
