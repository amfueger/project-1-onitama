//deck object
//moves for card start left to right. 
const deck = [{
	name:"Cobra", 
	redmovement1x: -1,
	redmovement1y: +0,
	redmovement2x: +1,
	redmovement2y: -1,
	redmovement3x: +1,
	redmovement3y: +1,
	redplayerx: null,
	redplayery: null,
 }, {
 	name:"Goose", 
	redmovement1x: -1,
	redmovement1y: +1,
	redmovement2x: -1,
	redmovement2y: +0,
	redmovement3x: +1,
	redmovement3y: +0,
	redmovement4x: +1,
	redmovement5x: -1, 
	redplayerx: null, 
	redplayery: null,
}, {
	name: "Elephant",
	redmovement1x: -1,
	redmovement1y: +1,
	redmovement2x: -1,
	redmovement2y: +0,
	redmovement3x: +1,
	redmovement3y: +1,
	redmovement4x: +1,
	redmovement4y: +0,
	redplayerx: null,
	redplayery: null,
	blueplayerx: null,
	blueplayery: null,

}, {
	name: "Frog",
	redmovement1x: 0,
	redmovement1y: 0,
	redmovement2x: 0,
	redmovement2y: 0,
	redmovement3x: 0,
	redmovement3y: 0,
	redplayerx: null,
	redplayery: null,
	blueplayerx: null,
	blueplayery: null,

}, {
	name: "Frog2test",
	redmovement1x: 0,
	redmovement1y: 0,
	redmovement2x: 0,
	redmovement2y: 0,
	redmovement3x: 0,
	redmovement3y: 0,
	redplayerx: null,
	redplayery: null,
	blueplayerx: null,
	blueplayery: null,

}]


//Pawn 1's x coordinate = Pawn 1's x coordinate + card property movement 1's x #. 
//redPawn[0].x = redPawn[0].x + card[1].redmovement1x
//redPawn[0].y = redPawn[0].y + card[1].redmovement1Y
//make sure these stay integers
//run check on pawn's x and y coordinates after, then if pawns x,y matches square's x,y, move it. 
//Pawn gets it's coordinates from 
//redPawn[0].x = $('#id-of-square').data(x); and 
//redPawn[0].y = $('#id-of-square')data(y);
//on.('click' will pull id.
/*

Let's say redPawn[0].x = 1 and redPawn[0].y = 1
We select redPlayerCard[0]
redPlayerCard[0] asks for redPawn[0].x and assigns that value to redplayerx, and the same is true for y value. Check to make sure it is an integer!!
redPawn[0].x = redPawn[0].x + card[1].redmovement1x
redPawn[0].y = redPawn[0].y + card[1].redmovement1Y
*/
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
class Pawn{                                 
	constructor(x, y, color, pawnnumber, live){
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
		this.whoseTurn = this.redPawns;
		this.chosenPawn = {};
	}
//solicit button click for color. Player one, which color would you rather be?
//make pawns
//pass in the coordinates for redmovementx and y on Blue's turn.
//Make sure arguments comes in as a number!!!! 
//define the movement in the card for one of the pieces. When I write the moving piece, it checks to see if the pawn is blue, it multiplies the movement by -1
	
	gamePlay() {
// 		5. Pawn selected - click pawn on board OR click separate button

clearClickables();
setupTurn();

// the jquery selector class we're listening for
//put attributes on the first line of the red pawns
// 	1. Text prompt to select which of player's two cards to use



// 		2. User clicks card they wish to use
// 6. Card selected - card enlarges for user to see, but does not cover board
// 	1. Card shows possible movements, black space indicating where pawn is identified on the board. 
// 	2. Card itself allows for selection on the card to pick spot player can move to. 
// 		1. Card is already connected to pawn selected and its location
// 		2. Card knows from location of pawn its movement restrictions, uses a check system if the possible move is not within the array. So first check is if it's not [0-4,0-4], it's a no go. 
// 		3. Second check if player pawn is already present, disallow move, text prompt that your pawn is already there
// 	3. Once clicked, card moves back to position. 
// 7. Pawn that was selected attempts to move to selected spot.  
// 	1. If enemy pawn is there, set that enemy pawn's position to null and remove from board.
// 		1. Print out pawn[0-4]enemy is removed from board!
// 		2. Remove button or pawn.
// 	2. If empty, change property position of pawn.
// 	3. Pawn moves to new div. 
	}
	gameSetup() {
		//THIS WORKS
		this.redPawns = this.generatePawns("red", 1);
		this.bluePawns = this.generatePawns("blue", 5);
		this.currentDeck = this.generateDeck(deck);
		this.pushCardsintoHand(this.currentDeck);
	}
	setupTurn(){
		if (whoseTurn == this.redPawns) {
			$('.red-pawn').addClass('clickable');
			//add to x,y positions to start. 
		} else if (whoseTurn == this.bluePawns) {
			$('.blue-pawn').addClass('clickable')
		} else {
			return false;
		}
		//using addclass becuase I don't want to override existing class
		//put pawns down and make them clickable
		//look at whoseTurn
		//find the elements red-pawn and blue-pawn

	}
	clearClickables(){
			$('.clickable').removeClass('clickable'); 
	 }
	senseiStone(pawnnumber){

	}
	senseiStream(x, y){

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
	generateDeck(deck){
		//had const deck, made a full copy, then use random to pull 5 cards out it with *
		let fullDeck = [];
		fullDeck = deck.slice(0); //fullDeck means 16 deck copy
		//console.log(fullDeck);
		let currentDeck = []; //five cards
		for(let i = 0; i <= 4; i++) {
			currentDeck[i] = fullDeck.splice(Math.floor(Math.random * fullDeck.length),1)[0]; //splice is returning the card inside of an array, a one element array, and running this multiple times, splice removes the card itself, so no multiple options. 
			//console.log(fullDeck);
			//console.log(currentDeck);
		}
			//console.log(currentDeck);

			return currentDeck;
	}
	pushCardsintoHand(currentDeck){
		this.redHand.push(currentDeck[0]); //no pop because I need to keep track of all five of the cards together. 
		this.redHand.push(currentDeck[1]);
		this.blueHand.push(currentDeck[2]);
		this.blueHand.push(currentDeck[3]);
		this.sideCard = currentDeck[4];
		// console.log(this.redHand);
		// console.log(this.blueHand);
		// console.log(this.sideCard);
	}
	switchCards(playerhand, ) {
		//need a third variable to temporarily store the side card
		//
	}

}

let game = new Game();
game.gameSetup();


/*****************Listeners************/


//$('#clickable').on('click', this.chosenPawn);