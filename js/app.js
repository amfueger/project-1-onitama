//deck object
//moves for card start left to right. 
const deck = [{
	name: "Cobra",
	moves: [{
		x: -1,
		y: +0
	}, {
		x: +1,
		y: -1
	}, {
		x: +1,
		y: +1
	}],
	img: 'card-images/cobra.jpg'
}, {
	name: "Goose",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: -1,
		y: +0
	}, {
		x: +1,
		y: +0
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/goose.jpg'
}, {
	name: "Elephant",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: -1,
		y: +0
	}, {
		x: +1,
		y: +1
	}, {
		x: +1,
		y: +0
	}],
	img: 'card-images/Elephant.jpg'
}, {
	name: "Frog",
	moves: [{
		x: -2,
		y: +0
	}, {
		x: -1,
		y: +1
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/Frog.jpg'
}, { //done
	name: "Mantis",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: +0,
		y: -1
	}, {
		x: +1,
		y: +1
	}],
	img: 'card-images/Mantis.jpg'
}, {
	name: "Boar",
	moves: [{
		x: -1,
		y: +0
	}, {
		x: +0,
		y: +1
	}, {
		x: +0,
		y: +1
	}],
	img: 'card-images/Boar.jpg'
}, {
	name: "Rooster",
	moves: [{
		x: -1,
		y: +0
	}, {
		x: -1,
		y: -1
	}, {
		x: +1,
		y: +1
	}, {
		x: +1,
		y: +0
	}],
	img: 'card-images/Rooster.jpg'
}, {
	name: "Crane",
	moves: [{
		x: -1,
		y: -1
	}, {
		x: +0,
		y: +1
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/Crane.jpg'
}, {
	name: "Horse",
	moves: [{
		x: -1,
		y: +0
	}, {
		x: +0,
		y: +1
	}, {
		x: +0,
		y: -1
	}],
	img: 'card-images/Horse.jpg'
}, {
	name: "Tiger",
	moves: [{
		x: +0,
		y: +2
	}, {
		x: +0,
		y: -1
	}],
	img: 'card-images/Tiger.jpg'
}, {
	name: "Dragon",
	moves: [{
		x: -2,
		y: +1
	}, {
		x: -1,
		y: -1
	}, {
		x: +2,
		y: +1
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/Dragon.jpg'
}, {
	name: "Rabbit",
	moves: [{
		x: -1,
		y: -1
	}, {
		x: +1,
		y: +1
	}, {
		x: +2,
		y: +0
	}],
	img: 'card-images/Rabbit.jpg'
}, {
	name: "Ox",
	moves: [{
		x: +0,
		y: +1
	}, {
		x: +0,
		y: -1
	}, {
		x: +1,
		y: +0
	}],
	img: 'card-images/Ox.jpg'
}, {
	name: "Crab",
	moves: [{
		x: -2,
		y: +0
	}, {
		x: +0,
		y: +1
	}, {
		x: +2,
		y: +0
	}],
	img: 'card-images/Crab.jpg'
}, {
	name: "Monkey",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: -1,
		y: -1
	}, {
		x: +1,
		y: +1
	}, {
		x: +1,
		y: -1
	}],
	img: 'card-images/Monkey.jpg'
}, {
	name: "Eel",
	moves: [{
		x: -1,
		y: +1
	}, {
		x: -1,
		y: -1
	}, {
		x: +1,
		y: +0
	}],
	img: 'card-images/Eel.jpg'
}]
class Deck {
	// draw a random card
	// deck has a property of cards
	constructor(cards) {
		this.cards = cards.slice();
	}
	drawCardAt(index) {
		return this.cards.splice(index, 1)[0];
	}
	drawRandom() {
		let index = Math.floor(Math.random() * this.cards.length);
		return this.index;
	}
}
//Pawn class
class Pawn {
	constructor(x, y, color, pawnnumber, live) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.pawnnumber = pawnnumber;
		this.live = live;
		// don't need sensei because it's always three. 
		//storing pawns in an array, will hide within the array using boolean instead of removing because otherwise that changes the position of the pawns upon calling them. 
	};
}
//Begin Game function
class Game {
	constructor() {
		this.redHand = [];
		this.blueHand = [];
		this.sideCard = {};
		this.selectedCard = {}; //this is to hold the player's selected card after pawn select
		this.whoseTurn = "red"; //true for red?
		this.chosenPawnElement = {};
		this.clickedPawnX = null;
		this.clickedPawnY = null;
		this.cardClicked = "";
		this.currentDeck = [];
		this.waitingforSquare = false;
		this.waitingforCard = false;
		this.waitingforPawn = true;
		this.currentPawn = null;
		this.cardClickedIndex = null;
		this.newPawnPositionY = null;
		this.newPawnPositionX = null;
	}
	gameSetup() {
		//THIS WORKS
		this.redPawns = this.generatePawns("red", 1);
		this.bluePawns = this.generatePawns("blue", 5);
		this.currentDeck = this.generateDeck(deck);
		this.pushCardsintoHand(this.currentDeck);
	}
	senseiStone() {}
	senseiStream() {
		//if red pawn number 3's location is x = 3, y =5
		//No need to listen for whose turn, because the pawn would only move on the turn of the right player anyway. This is just called to check on that. 
		if (this.redPawns[2].x === 3 && this.redPawns[2].y === 5) {
			return true;
		} else {
			if (this.bluePawns[2].x === 3 && this.bluePawns[2].y === 1) //pawn is on x = 3, y = 1
				return false;
		}
	}
	endGame() {
		if (senseiStream() === true) {
			//RED WINS, RED IS TRUE
		} else {
			//BLUE WINS, BLUE IS FALSE
		}
	}
	generatePawns(color, y) {
		//note, DO NOT CHANGE STARTING POINT OF I, you will fuck everything.
		let pawns = [];
		for (let i = 1; i < 6; i++) {
			pawns.push(new Pawn(i, y, color, i, true));
			//pushing a new pawn to an array
		};
		return pawns;
	}
	generateDeck() {
		//had const deck, made a full copy, then use random to pull 5 cards out it with *
		let fullDeck = [];
		fullDeck = deck.slice(0); //fullDeck means 16 deck copy
		//console.log(fullDeck);
		//five cards
		for (let i = 0; i <= 4; i++) {
			this.currentDeck.push(fullDeck.splice(Math.floor(Math.random() * fullDeck.length), 1)[0]);
			//console.log(fullDeck);
			//console.log(currentDeck);
		}
		//console.log(currentDeck);
		return this.currentDeck;
	}
	pushCardsintoHand(currentDeck) {
		//no pop because I need to keep track of all five of the cards together. 
		this.redHand.push(currentDeck[0]);
		this.redHand.push(currentDeck[1]);
		this.blueHand.push(currentDeck[2]);
		this.blueHand.push(currentDeck[3]);
		this.sideCard = currentDeck[4];
		// flips them over to be visible
		$('#redcard1').attr('src', this.redHand[0].img);
		$('#redcard2').attr('src', this.redHand[1].img);
		// flip blue cards to be visible
		$('#bluecard1').attr('src', this.blueHand[0].img);
		$('#bluecard2').attr('src', this.blueHand[1].img);
		$('#side-card').attr('src', this.sideCard.img);
		// console.log(this.redHand);
		// console.log(this.blueHand);
		// console.log(this.sideCard);
	}
	removeOpponentPawn() {
		//assume that the pawn img has just moved in to the div from clicking
		//if inside the div tag there are two images, remove the FIRST one (since we are using append for the pawn that just moved in)
	}
	switchCards() {
		//need a third variable to temporarily store the side card
		if (this.whoseTurn === "red") {
			let sideCardMoving = this.redHand.splice(this.cardClickedIndex);
			this.redHand.append(this.sideCard);
			this.sideCard = sideCardMoving;
		} else {
			let sideCardMoving = this.blueHand.splice(this.cardClickedIndex);
			this.blueHand.append(this.sideCard);
			this.sideCard = sideCardMoving;	
		}
		//
	}
	switchToOtherPlayer() {
		if (this.whoseTurn === "red") {
			this.whoseTurn = "blue";
			//console.log(this.whoseTurn);
		} else if (this.whoseTurn === "blue") {
			this.whoseTurn = "red";
		}
		//console.log(this.whoseTurn);
	}
	movePawn(e) {
		if (this.whoseTurn === "red") {
			//[{property[property]}]
			for (let i = 0; i < this.cardClicked.moves.length; i++) {
				//the y and x now equal the current pawn position + the card's moves in the array
				//tested syntax of this.cardClicked.moves[i].y, works to return a number
				//console.log(i + " i using it as an index"); WORKING
				this.newPawnPositionY = Number(this.cardClicked.moves[i].y + this.clickedPawnY);
				this.newPawnPositionX = Number(this.cardClicked.moves[i].x + this.clickedPawnX);
				//WORKS TO CHANGE CLICKED PAWN TO POSSIBLE MOVE
				//checking the possible move against the div tags
				if (this.newPawnPositionX === $(e.target).data('x') && this.newPawnPositionY === $(e.target).data('y')) {
					//If the div's data x and y are equal to any of the above loops, which is above, allow that click??? Or is it already allowed? 

					//assume it's already allowed, then current target should get pawn img reassigned to that div. 
					this.chosenPawnElement = $('.pawn.current-pawn');//the img that has current-pawn class.
					//$('div .current-pawn').eq(0).detatch(); //takes the class current-pawn that rests on the div and detaches the first child, which is the img
					$('div > .current-pawn').eq(0).detatch();
					console.log($('div.current-pawn') + " show that the div tag is empty"); //shows div tag is empty
					$(e.target).append(this.chosenPawnElement); //appends that thing to the target click.
					console.log(this.chosenPawnElement +  " inside its div this should be IMG"); //test whether that img's 

					console.log(this.currentPawn + " current pawn within movePawn loop");
					//hold current pawn in variable so that when removal happens, I can append the variable to the correct div element
					
				}
			
			}

		} else {
			let bluePawnMovesY = this.cardClicked.moves[i].y;
			let bluePawnMovesX = this.cardClicked.moves[i].x;
			//is negative
			if (bluePawnMovesY < 0) {
				//makes positive
				bluePawnMovesY = Math.abs(this.cardClicked.moves[i].y);
			} //is positive
			if (bluePawnMovesY > -1) {
				//makes negative
				bluePawnMovesY = this.cardClicked.moves[i].y * -1;
			} //is negative
			if (bluePawnMovesX < 0) {
				//Makes positive
				bluePawnMovesX = Math.abs(this.cardClicked.moves[i].x);
			} //is positive	
			if (bluePawnMovesX > -1) {
				bluePawnMovesX = this.cardClicked.moves[i].x * -1;
			}
			this.clickedPawnY = bluePawnMovesY + this.clickedPawnY;
			this.clickedPawnX = bluePawnMovesX + this.clickedPawnX;
			if (this.clickedPawnX === $(e.target).data('x') && this.clickedPawnY === $(e.target).data('y')) {
				//add class to squares that makes them clickable
				$(e.target).addClass('click-square');
				//this.clickedPawnY = this.clickedPawnY - bluePawnMovesY;
				//this.clickedPawnX = this.clickedPawnX - bluePawnMovesX;
			}
		}
	}
}
let game = new Game();
game.gameSetup();
/*****************Listeners************/
$('.pawn').on('click', (e) => {
	if (game.waitingforPawn === true) {
		let itsRedPawn = $(e.currentTarget).hasClass('red-pawn');
		//console.log(itsRedPawn + " it's Red Pawn");
		if (itsRedPawn) {
			if (game.whoseTurn === "red") {
				game.clickedPawnX = $(e.target).parent().data('x'); //works
				game.clickedPawnY = $(e.target).parent().data('y'); //works
				//assigns current-pawn class to both div and child img. This is to ensure recovery of x/y data and allow the img to move. 
				game.currentPawn = $(e.target).parent().addClass('current-pawn').children('img').addClass('current-pawn');
				//game.currentPawn = $('.current-pawn');
				//This inclues the div class and the pawn itself. Note this for later because only the img moves.
				//console.log(game.currentPawn + "After Red turn, this is the current pawn assignation");
				game.waitingforCard = true;
				game.waitingForPawn = false;
				// console.log(game.clickedPawnX + " x  and " + game.clickedPawnY + " y");
				// console.log(game.currentPawn + " current pawn selected" );	
				// console.log(game.waitingforCard + " <<< THIS SHOULD BE FALSE, RED");
				// console.log(game.waitingforPawn + " <<< THIS should be false, red");
			}
		} else {
			if (game.whoseTurn === "blue") {
				game.clickedPawnX = $(e.target).parent().data('x');
				game.clickedPawnY = $(e.target).parent().data('y');
				game.currentPawn = $(e.target).parent().addClass('current-pawn').children('img').addClass('current-pawn');
				game.currentPawn = $('.current-pawn'); //This inclues the div class and the pawn itself. Note this for later because only the img moves.
				//console.log(game.currentPawn + "After Blue turn, this is the current pawn assignation");
				game.waitingforCard = true;
				game.waitingForPawn = false;
				// console.log(game.clickedPawnX + " x  and " + game.clickedPawnY + " y");
				// console.log(game.currentPawn + " current pawn selected" );	
				// console.log(game.waitingforPawn + " <<<This should be false, blue");
				// console.log(game.waitingforCard + " <<<THIS SHOULD BE TRUE BLUE ");
			}
		}
	}
});
$('.cards').on('click', (e) => {
	// only do all of the following code if it was ok to click a card
	if (game.waitingforCard === true) {
		let itsRedCard = $(e.currentTarget).hasClass('red-cards');
		//console.log(itsRedCard + " its red card");
		if (itsRedCard) { // if red card was clicked
			// if it's red's turn
			if (game.whoseTurn === "red") {
				//console.log(" red card was clicked and that's ok because it's reds turn")
				// Boolean for moving on to square click
				game.cardClickedIndex = $(e.target).data('card');
				game.cardClicked = game.redHand[game.cardClickedIndex];
				//console.log(game.cardClicked + " testing red card clicked"); WORKS
				//No need to take in more data, because the data we need is still in the card.
				game.waitingforCard = false;
				game.waitingforSquare = true;
			}
		} else { // else (if blue was clicked)
			if (game.whoseTurn === "blue") {
				//console.log(" blue card was clicked and that's ok because it's blue's turn")
				//this is making it that div, but I need the card to correspond to the blueHand array
				//I made sure the div tags matched the card number, so that the card that's clicked lines up with ends up in the array. 
				game.cardClickedIndex = $(e.target).data('card');
				game.cardClicked = game.blueHand[game.cardClickedIndex];
				// console.log(game.cardClicked + " testing blue card clicked"); WORKS
				game.waitingforCard = false;
				game.waitingforSquare = true;
			}
		}
	}
});
$('.square').on('click', (e) => {
	if (game.waitingforSquare === true) {
		game.movePawn(e);
		
		
	}
})