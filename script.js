const cardsArray = ["❤️", "❤️", "💖", "💖", "💘", "💘", "💕", "💕"];
let flippedCards = [];
let matchedPairs = 0;

const gameBoard = document.getElementById("game-board");

cardsArray.sort(() => Math.random() - 0.5);

cardsArray.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.dataset.index = index;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
});

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.textContent = this.dataset.symbol;
        this.classList.add("flipped");
        flippedCards.push(this);
    }

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
        flippedCards.forEach(card => card.style.backgroundColor = "#ff99cc");
        matchedPairs++;
    } else {
        flippedCards.forEach(card => {
            card.textContent = "";
            card.classList.remove("flipped");
        });
    }
    flippedCards = [];

    if (matchedPairs === cardsArray.length / 2) {
        showSurprise();
    }
}

function showSurprise() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "0px";
        heart.style.fontSize = `${Math.random() * 20 + 20}px`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }

    setTimeout(() => window.location.href = "surprise.html", 4000);
}
