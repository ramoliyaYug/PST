let errors = 0;
let cardList = ["ayanokoji", "gojo", "goku", "kakashi", "kira", "luffy", "naruto", "sukuna", "tanjiro", "toji"];
let cardSet;
let board = [];
let rows = 4;
let columns = 5;
let card1Selected;
let card2Selected;
let matchedCards = 0;

window.onload = function () {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList); //two of each card
    //shuffle
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length); //get random index
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
}

function startGame() {
    //arrange the board 4x5
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg); //JS

            // <img id="0-0" class="card" src="water.jpg">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".jpg";
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);
        }
        board.push(row);
    }

    setTimeout(hideCards, 2000);
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "back.jpg";
        }
    }
}

function selectCard() {
    if (this.src.includes("back")) {
        if (!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".jpg";
        } else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card2Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".jpg";
            setTimeout(update, 1000);
        }
    }
}

function update() {
    // if cards match
    if (card1Selected.src === card2Selected.src) {
        matchedCards++;
        if (matchedCards === (rows * columns) / 2) {
            // Game is complete
            showVideo();
        }
    } else {
        // if cards aren't the same, flip both back
        card1Selected.src = "back.jpg";
        card2Selected.src = "back.jpg";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    }

    card1Selected = null;
    card2Selected = null;
}

function showVideo() {
    // Display video when game is complete
    const videoElement = document.querySelector('video');
    videoElement.style.display = 'block';
    videoElement.style.position = 'absolute';
    videoElement.style.top = '50%';
    videoElement.style.left = '50%';
    videoElement.style.transform = 'translate(-50%, -50%)';
    videoElement.style.zIndex = 9999; // Make sure video is on top
    videoElement.play();

    // After 4 seconds, reload the page
    setTimeout(() => {
        location.reload(); 
    }, 4000);
}
