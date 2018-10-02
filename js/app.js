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
		this.clickedPawnX = null;
		this.clickedPawnY = null;
		this.cardClicked = "";
		this.currentDeck = [];
		this.currentPawn = null;
		this.cardClickedIndex = null;
		this.newPawnPositionY = null;
		this.newPawnPositionX = null;
		this.waitingforSquare = false;
		this.waitingforCard = false;
		this.waitingforPawn = true;
	}
	gameSetup() {
		//THIS WORKS
		this.redPawns = this.generatePawns("red", 1);
		this.bluePawns = this.generatePawns("blue", 5);
		this.currentDeck = this.generateDeck(deck);
		this.pushCardsintoHand(this.currentDeck);
	}
	// check if Stone is dead

	victoryRed() {
		if(this.whoseTurn === "red"){
			//Stone is asking if the squares have no child elements with attributes of a class
			if($('.square').children().attr('blue-pawn-3') === false) {
				//true is victory!
				return true;
				//stream
			} else if (this.redPawns[2].x === 3 && this.redPawns[2].y === 5) {
				//true for victory!
				return true;
			}
			//no one has won yet!
			return false;
		}
	}
	victoryBlue() {
		if(this.whoseTurn === "blue"){
			//Stone is asking if the squares have no child elements with attributes of a class
			if($('.square').children().attr('red-pawn-3') === false) {
				//true is victory!
				console.log("Red has won!");
				return true;
				//stream
			} else if (this.bluePawns[2].x === 3 && this.bluePawns[2].y === 1) {
				//true for victory!
				console.log("Blue has won!");
				return true;
			}
			//no one has won yet!
			console.log("No one has won yet!");
			return false;
		}
	}
	gameOver() {
		if(this.victoryBlue === true){
			console.log("Blue has won!!!");
		} 
		if (this.victoryRed === true) {
			console.log("Red has won!!!");
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
	removeOpponentPawn(e) { console.log(e)
		//TWO WAYS I can do this. 
		//1. On player turn, any pawns with the class that's NOT the player's get removed. 
		//If it's red's turn, and....
		if (this.whoseTurn === "red") {
			//target square contains blue pawn, remove it!
			//NEED IF STATEMENT TO CHECK IF BLUE PAWN IS THERE BEFORE REMOVAL
			if($(e.target).children().hasClass('blue-pawn')) {
				$(e.target).remove($('.blue-pawn'));
			}
			
		}
		//If it's blue's turn, and....
		if (this.whoseTurn === "blue") {
			//REPEAT DOWN BELOW
			//target square contains red pawn, remove it!
			if($(e.target.children().hasClass('red-pawn'))){
				$(e.target).remove($('.red-pawn'));
			}
				
		}
	}
	// checkIfPawnOfColorIsThere(e) { 
	// 	if (this.whoseTurn === "red") {
	// 		if(let i = 0; i <= this.redPawns.length; i++) {
	// 			if(this.redPawns[i].data('x') === $(e.target).data('x') && this.redPawns[i].data('y') === $(e.target).data('y')) {
	// 				//true means that one of your pawns is there already
	// 				return true;
	// 			}
	// 		}
	// 	} else if (this.whoseTurn === "blue") {
	// 		if(let i = 0; i < this.bluePawns.length; i++){
	// 			if(this.bluePawns[i].data('x') ==== $(e.target).data('x') && this.bluePawns[i].data('x') ==== $(e.target).data('x')) {
	// 				//true means one of your pawns is there already
	// 				return true;
	// 			}
	// 		}
	// 	}
	// 	console.log("about to return false")
	// 	return false;
	// }
	switchCards(e) {
		//Does not work.
		if (this.whoseTurn === "red") {	
			let sideCardMoving = this.redHand.slice(this.cardClickedIndex);
			console.log(sideCardMoving + " the card that's moving from red's hand array that was used");
			this.redHand.push(this.sideCard);
			this.sideCard = sideCardMoving;
			let tempUsedCardImage = this.cardClicked[this.cardClickedIndex];
			this.redHand.push(this.tempSideCardImage)
			$('#redcard1').attr('src', this.redHand[0].img);
			$('#redcard2').attr('src', this.redHand[1].img);
			$('#bluecard1').attr('src', this.blueHand[0].img);
			$('#bluecard2').attr('src', this.blueHand[1].img);
			$('#side-card').attr('src', this.sideCard.img);
		} else {
			let sideCardMoving = this.blueHand.splice(this.cardClickedIndex);
			this.blueHand.push(this.sideCard);
			this.sideCard = sideCardMoving;
		}
		//console.log("Why isn't this working");
	}
	switchToOtherPlayer() {
		if (this.whoseTurn === "red") {
			this.whoseTurn = "blue";
			this.clickedPawnX = null;
			this.clickedPawnY = null;
			this.cardClicked = "";
			this.currentDeck = [];
			this.currentPawn = null;
			this.cardClickedIndex = null;
			this.newPawnPositionY = null;
			this.newPawnPositionX = null;
			//console.log(this.whoseTurn);
		} else if (this.whoseTurn === "blue") {
			this.whoseTurn = "red";
			this.clickedPawnX = null;
			this.clickedPawnY = null;
			this.cardClicked = "";
			this.currentDeck = [];
			this.currentPawn = null;
			this.cardClickedIndex = null;
			this.newPawnPositionY = null;
			this.newPawnPositionX = null;
		}
		//console.log(this.whoseTurn);
	}
	selectCurrentCard(e) {
		if (this.waitingforCard === true) {
			let itsRedCard = $(e.currentTarget).hasClass('red-cards');
			//console.log(itsRedCard + " its red card");
			if (itsRedCard) { // if red card was clicked
				// if it's red's turn
				if (this.whoseTurn === "red") {
					//console.log(" red card was clicked and that's ok because it's reds turn")
					// Boolean for moving on to square click
					this.cardClickedIndex = $(e.target).data('card');
					this.cardClicked = this.redHand[this.cardClickedIndex];
					//cothise.log(game.cardClicked + " testing red card clicked"); WORKS
					//No need to take in more data, because the data we need is still in the card.
					this.waitingforCard = false;
					this.waitingforSquare = true;
				}
			} else { // else (if blue was clicked)
				if (this.whoseTurn === "blue") {
					//console.log(" blue card was clicked and that's ok because it's blue's turn")
					//this is making it that div, but I need the card to correspond to the blueHand array
					//I made sure the div tags matched the card number, so that the card that's clicked lines up with ends up in the array. 
					this.cardClickedIndex = $(e.target).data('card');
					this.cardClicked = this.blueHand[this.cardClickedIndex];
					// console.log(game.cardClicked + " testing blue card clicked"); WORKS
					this.waitingforCard = false;
					this.waitingforSquare = true;
				}
			}
		}
	}
	selectCurrentPawn(e) {
		if (this.waitingforPawn === true) {
			let itsRedPawn = $(e.currentTarget).hasClass('red-pawn');
			//console.log(itsRedPawn + " it's Red Pawn");
			if (itsRedPawn) {
				if (this.whoseTurn === "red") {
					this.clickedPawnX = $(e.target).parent().data('x'); //works
					this.clickedPawnY = $(e.target).parent().data('y'); //works
					//assigns current-pawn class to both div and child img. This is to ensure recovery of x/y data and allow the img to move. 
					this.currentPawn = $(e.target).parent().addClass('current-pawn-container').children('img').addClass('current-pawn');
					//game.currentPawn = $('.current-pawn');
					//This inclues the div class and the pawn itself. Note this for later because only the img moves.
					//console.log(game.currentPawn + "After Red turn, this is the current pawn assignation");
					this.waitingforCard = true;
					this.waitingForPawn = false;
					// console.log(game.clickedPawnX + " x  and " + game.clickedPawnY + " y");
					// console.log(game.currentPawn + " current pawn selected" );	
					// console.log(game.waitingforCard + " <<< THIS SHOULD BE FALSE, RED");
					// console.log(game.waitingforPawn + " <<< THIS should be false, red");
				}
			} else {
				if (this.whoseTurn === "blue") {
					this.clickedPawnX = $(e.target).parent().data('x');
					this.clickedPawnY = $(e.target).parent().data('y');
					this.currentPawn = $(e.target).parent().addClass('current-pawn').children('img').addClass('current-pawn');
					//game.currentPawn = $('.current-pawn'); //This inclues the div class and the pawn itself. Note this for later because only the img moves.
					//console.log(game.currentPawn + "After Blue turn, this is the current pawn assignation");
					this.waitingforCard = true;
					this.waitingForPawn = false;
					// console.log(game.clickedPawnX + " x  and " + game.clickedPawnY + " y");
					// console.log(game.currentPawn + " current pawn selected" );	
					// console.log(game.waitingforPawn + " <<<This should be false, blue");
					// console.log(game.waitingforCard + " <<<THIS SHOULD BE TRUE BLUE ");
				}
			}
		}
	}
	movePawn(e) {
		if (this.whoseTurn === "red") {

			// make sure this move legal according to the card

			// making sure the square we're moving to doesn't have a red pawn on it


			//[{property[property]}]
			for (let i = 0; i < this.cardClicked.moves.length; i++) {
				//the y and x now equal the current pawn position + the card's moves in the array
				//tested syntax of this.cardClicked.moves[i].y, works to return a number
				//console.log(i + " i using it as an index"); WORKING
				this.newPawnPositionY = Number(this.cardClicked.moves[i].y + this.clickedPawnY);
				this.newPawnPositionX = Number(this.cardClicked.moves[i].x + this.clickedPawnX);
				//WORKS TO CHANGE CLICKED PAWN TO POSSIBLE MOVE
				//checking the possible move against the div tags

				// if the clicked square matches this pawn's swaure
				// AND if there's not a pawn there that's the current player's color
				if (this.newPawnPositionX === $(e.target).data('x') && this.newPawnPositionY === $(e.target).data('y')/* && this.checkIfPawnOfColorIsThere(e) === false*/) {
					//If the div's data x and y are equal to any of the above loops, which is above, allow that click??? Or is it already allowed? 
					//assume it's already allowed, then current target should get pawn img reassigned to that div. 
					//THE REASON THE DIV TAG AND THE IMG CHILD HAVE THE SAME CLASS IS BECAUSE IN ORDER TO MOVE IT I NEED TO SELECT THE SPECIFIC CLASS THAT IS HOUSING THE DIV. 
					let currentPawnImage = this.currentPawn.detach();
					$(e.target).append(currentPawnImage); //appends that thing to the target click.
					$('div').remove($('.current-pawn-container'));

					//this.removeOpponentPawn(e);

					//NOW remove current-pawn class
					$('img').removeClass('current-pawn')
					this.victoryBlue();
					this.victoryRed()
					this.switchCards();

				} // if
			} // for
			this.switchToOtherPlayer();

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
			if (this.newPawnPositionX === $(e.target).data('x') && this.newPawnPositionY === $(e.target).data('y') && this.checkIfPawnOfColorIsThere(e) === false) {
				let currentPawnImage = this.currentPawn.detach();
				$(e.target).append(currentPawnImage); //appends that thing to the target click.
				//Should be able to see in console and on screen the pawn move. 
				console.log(this.currentPawn + " current pawn within movePawn loop");
			}
		}
	}
}
let game = new Game();
game.gameSetup();
/*****************Listeners************/
$('.pawn').on('click', (e) => {
	game.selectCurrentPawn(e);
});
$('.cards').on('click', (e) => {
	game.selectCurrentCard(e);
});
$('.square').on('click', (e) => {
	if (game.waitingforSquare === true) {
		game.movePawn(e);
	}
})