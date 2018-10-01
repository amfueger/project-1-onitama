//deck object
//moves for card start left to right. 
const deck = [{
	name: "Cobra",
	moves: [{
		x: -1,
		y: +0
	},
	{
		x: +1,
		y: -1
	},
	{
		x: +1,
		y: +1
	}],
	img: 'card-images/cobra.jpg'
}, {
	name: "Goose",
	moves: [{
		x: -1,
		y: +1
	},
	{ 
		x: -1,
		y: +0
	},
	{
		x: +1,
		y: +0
	},
	{
		x: +1,
		y: -1
	}],
	img: 'card-images/goose.jpg'
}, {
	name: "Elephant",
	moves: [{
		x: -1,
		y: +1
	},
	{ 
		x: -1,
		y: +0
	},
	{
		x: +1,
		y: +1
	},
	{
		x: +1,
		y: +0
	}],
	img: 'card-images/Elephant.jpg'
}, {
	name: "Frog",
	moves: [{
		x: -2,
		y: +0
	},
	{ 
		x: -1,
		y: +1
	},
	{
		x: +1,
		y: -1
	}],
	img: 'card-images/Frog.jpg'
}, { //done
	name: "Mantis",
	moves: [{
		x: -1,
		y: +1
	},
	{ 
		x: +0,
		y: -1
	},
	{
		x: +1,
		y: +1
	}],
	img: 'card-images/Mantis.jpg'
}, {
	name: "Boar",
	moves: [{
		x: -1,
		y: +0
	},
	{ 
		x: +0,
		y: +1
	},
	{
		x: +0,
		y: +1
	}],
	img: 'card-images/Boar.jpg'
}, {
	name: "Rooster",
	moves: [{
		x: -1,
		y: +0
	},
	{ 
		x: -1,
		y: -1
	},
	{
		x: +1,
		y: +1
	},
	{
		x: +1,
		y: +0
	}],
	img: 'card-images/Rooster.jpg'
}, {
	name: "Crane",
	moves: [{
		x: -1,
		y: -1
	},
	{ 
		x: +0,
		y: +1
	},
	{
		x: +1,
		y: -1
	}],
	img: 'card-images/Crane.jpg'
}, {
	name: "Horse",
	moves: [{
		x: -1,
		y: +0
	},
	{ 
		x: +0,
		y: +1
	},
	{
		x: +0,
		y: -1
	}],
	img: 'card-images/Horse.jpg'
}, {
	name: "Tiger",
	moves: [{
		x: +0,
		y: +2
	},
	{ 
		x: +0,
		y: -1
	}],
	img: 'card-images/Tiger.jpg'
}, {
	name: "Dragon",
	moves: [{
		x: -2,
		y: +1
	},
	{ 
		x: -1,
		y: -1
	},
	{
		x: +2,
		y: +1
	},
	{
		x: +1,
		y: -1
	}],
	img: 'card-images/Dragon.jpg'
}, {
	name: "Rabbit",
	moves: [{
		x: -1,
		y: -1
	},
	{ 
		x: +1,
		y: +1
	},
	{
		x: +2,
		y: +0
	}],
	img: 'card-images/Rabbit.jpg'
}, {
	name: "Ox",
	moves: [{
		x: +0,
		y: +1
	},
	{ 
		x: +0,
		y: -1
	},
	{
		x: +1,
		y: +0
	}],
	img: 'card-images/Ox.jpg'
}, {
	name: "Crab",
	moves: [{
		x: -2,
		y: +0
	},
	{ 
		x: +0,
		y: +1
	},
	{
		x: +2,
		y: +0
	}],
	img: 'card-images/Crab.jpg'
}, {
	name: "Monkey",
	moves: [{
		x: -1,
		y: +1
	},
	{ 
		x: -1,
		y: -1
	},
	{
		x: +1,
		y: +1
	},
	{
		x: +1,
		y: -1
	}],
	img: 'card-images/Monkey.jpg'
}, {
	name: "Eel",
	moves: [{
		x: -1,
		y: +1
	},
	{ 
		x: -1,
		y: -1
	},
	{
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
		this.whoseTurn = "blue"; //true for red?
		this.chosenPawn = {};
		this.clickedPawnX = null;
		this.clickedPawnY = null;
		this.cardClicked = "";
		//console.log(this.redPawns);
		this.currentDeck = [];
	}
	//pass in the coordinates for redmovementx and y on Blue's turn.
	//Make sure arguments comes in as a number!!!! 
	//define the movement in the card for one of the pieces. When I write the moving piece, it checks to see if the pawn is blue, it multiplies the movement by -1
	gamePlay() {
		//gameSetup sets pawns for both hands, each of the player's hands of two cards, and puts the pawns in the correct positions
		this.gameSetup();
		// clears out any classes of clickable so that turn play can start.
		this.clearPawnClickables();
		this.clearCardClickable();
		// sets up clickable class to use an on.click listener for the pawns of the player whose turn it is.
		this.setupTurn();
		//time needed: 
		//listen for the click
		//change the cursor for hovering over a clickable event 
		//
		//pick the card
		//couple hours for available move?
		//another hour or so for card swapping?
		//victory conditions hour?
		//onclicks 2 hours
		//taking a piece logic 45-2 hours, as in removing from board
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
		this.switchToOtherPlayer();
	}

	gameSetup() {
		//THIS WORKS
		this.redPawns = this.generatePawns("red", 1);
		this.bluePawns = this.generatePawns("blue", 5);
		
		this.currentDeck = this.generateDeck(deck);
		this.pushCardsintoHand(this.currentDeck);

	}

	setupTurn() {
		//console.log(this.whoseTurn);
		if (this.whoseTurn === "red") {
			$('.red-pawn').addClass('clickable');
			$('.red-cards').addClass('card-clickable');
			//add to x,y positions to start. 
			//console.log("test");
			//console.log($('.red-pawn'));
		} else if (this.whoseTurn === "blue") {
			$('.blue-pawn').addClass('clickable');
			$('.blue-cards').addClass('card-clickable');
			console.log($('blue-cards'));
		} else {
			return false;
		}
		//using addclass becuase I don't want to override existing class
		//put pawns down and make them clickable
		//look at whoseTurn
		//find the elements red-pawn and blue-pawn
	}
	singleMove() {
		//we have our pawn clicked
		//we have our card clicked, presumably
		clearPawnClickables();
		$('.red-pawn').addClass('clickable');
		if(whoseTurn === "red"){
			//get the card itself
			//having trouble moving from on.click to card on.click
			let currentCard = redHand[cardClickedIndex];
			//looking at possible moves

			this.clickedPawnY;
			this.clickedPawnX;


	
		}
		if(whoseTurn === "blue") {

		}
		//whose turn ---> hand (red)
		//allow for select red pawns, and red cards
		//with the clicks, take that info and make the board spots clickable, find x and y for the possible moves. Take pawn and substract or add the properties of whichever move they click on the board. 
		//	
	}
	clearPawnClickables() {
		$('.clickable').removeClass('clickable');
		
	}
	clearCardClickable() {
		$('.card-clickable').removeClass('card-clickable');
	}
	senseiStone(pawnnumber) {}
	senseiStream(x, y) {}
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

		console.log(this.redHand);
		console.log(this.blueHand);
		console.log(this.sideCard);
	}
	switchCards(playerhand) {
		//need a third variable to temporarily store the side card
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
	chooseMove() {
		// makes clicking a square do something
		//


		let currentMoveX = 0;
		let currentMoveY = 0;

		if(this.whoseTurn === "red") {
			for(let i = 0; i < this.cardClicked.moves[length]; i++){
				let singleMoveY = this.cardClicked.moves[i].y + currentMoveY;
				let singleMoveX = this.cardClicked.moves[i].x + currentMoveX;
				if (
					singleMoveX == $('.square').val('data-x') && 
					singleMoveX == $('.square').val('data-y')
					) {
					clearPawnClickables();
					$('.square').addClass('.clickable')
				}
				//Check singleMove against any div tag with data-x, data-y
				//if it doesn't match any, don't assign
				//if it does match, assign the square with the matchin x and y a clickable class. 
					this.currentPawn.x = this.singleMoveX;
					this.currentPawn.y = this.singleMoveY;
			}
			$('.square').addClass('clickable');

		} else {

		}

		let currentMoveX = $('.square').attr('data-x')
		let currentMoveY = $('.square').attr('data-y')
	}
}
let game = new Game();
game.gameSetup();
/*****************Listeners************/
//NOT ABLE TO GET TO PARENT
$('.clickable').on('click', (e) => {
	game.clickedPawnX = $(e.target).parent().attr('data-x');
	game.clickedPawnY = $(e.target).parent().attr('data-y');
	game.currentPawn = $(e.target).parent().addClass('current-pawn');
	
});
// $('.card-clickable').on('click', (e) => {
// 	console.log("is this card clickable firing");
// 	game.cardClickedIndex = $(e.currentTarget).attr('data-card');
// });




$('.cards').on('click', (e) => {

	console.log(e)
	console.log(e.target)
	// get the card that was clicked
	// game.clickedCard = $('.cards')
	// e.currtenttarget is the dive you are listening on
	let itsRed = $(e.currentTarget).hasClass('red-cards');
	// you need to know if red-cards in the class list of that div
	// let itsRed = 
	console.log(itsRed + " its' a red card");

	if(itsRed) { console.log("red card was clicked")

		// if it's red's turn
		if(game.whoseTurn === "red") { 
			// game.clickedCard = $('.red-cards').data('card');
			// // allow player to choose move - method
			// console.log(game.clickedCard);
			// console.log(this.clickedCard.data('card'))
			console.log("red card was clicked and that's ok because it's reds turn")
			// make boolean true: amIexpectingAClickOnASquare

		}
	} else { console.log("blue card was clicked");
	// else (if blue was clicked)

		if(game.whoseTurn.toString() === "blue") {
			// game.clickedCard = $('.blue-cards').data('card');
			//add clickable class in here? 
			//important because we need to use clickables to assign that class to the squares that are NOW clickable
			// cardClicked.addClass('clickable-moves');
			// allow player to choose move - method
			// console.log(game.clickedCard);
			// console.log(this.clickedCard.data('card'))
			//game.chooseMove(game.clickedCard);
			console.log("blue card was clicked and that's ok because it's blue's turn")
		}

	}
	// return game.clickedCard;
	console.log(game.cardClicked);




})
console.log(game.clickedCard);




