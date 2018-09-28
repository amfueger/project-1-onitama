//deck object
//moves for card start left to right. 
const deck = [{
	name: "Cobra",
	redmovement1x: -1,
	redmovement1y: +0,
	redmovement2x: +1,
	redmovement2y: -1,
	redmovement3x: +1,
	redmovement3y: +1,
	bluemovement1x: +1,
	bluemovement1y: +0,
	bluemovement2x: -1,
	bluemovement2y: +1,
	bluemovement3x: -1,
	bluemovement3y: -1,
	redplayerx: null,
	redplayery: null,
	blueplayerx: null,
	blueplayery: null,

}, {
	name: "Goose",
	redmovement1x: -1,
	redmovement1y: +1,
	redmovement2x: -1,
	redmovement2y: +0,
	redmovement3x: +1,
	redmovement3y: +0,
	redmovement4x: +1,
	redmovement4y: -1,
	bluemovement1x: +1,
	bluemovement1y: -1,
	bluemovement2x: +1,
	bluemovement2y: +0,
	bluemovement3x: -1,
	bluemovement3y: +0,
	bluemovement4x: -1,
	bluemovement4y: +1,
	redplayerx: null,
	redplayery: null,
	blueplayerx: null,
	blueplayery: null,
}, {
	name: "Elephant",
	redmovement1x: -1
	redmovement1y: +1
	redmovement2x: -1
	redmovement2y: +0
	redmovement3x: +1
	redmovement3y: +1
	redmovement4x: +1
	redmovement4y: +0
	bluemovement1x: +1 
	bluemovement1y: -1
	bluemovement2x: +1
	bluemovement2y: +0
	bluemovement3x: -1
	bluemovement3y: -1
	bluemovement4x: -1
	bluemovement4y: +0
	redplayerx: null,
	redplayery: null,
	blueplayerx: null,
	blueplayery: null,

}, {
	name: "Frog",
	redmovement1x: 
	redmovement1y: 
	redmovement2x: 
	redmovement2y: 
	redmovement3x: 
	redmovement3y: 
	bluemovement1x: 
	bluemovement1y: 
	bluemovement2x: 
	bluemovement2y: 
	bluemovement3x: 
	bluemovement3y: 
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
//Pawn class
class Pawn{
	constructor(x, y, color, pawnnumber, sensei){
		this.x: pawnSetup(),
		this.y: pawnSetup(), 
		this.color: null;
		this.pawnnumber: 
		this.sensei: this.isSensei();

	},
	isSensei() {
		if(this.pawnnumber == 3) {
			this.sensei = true;
		} 
		return false;
	},
	senseiStone(){

	},
	senseiStream(){

	},
	pawnSetup(){
		if(this.color == "red"){
			for(let i = 0; i <= 5; i++) {
				this.pawnnumber = i;
				}
				while(this.pawnnumber = 1) {
					this.x = 1;
					this.y = 1;
				}
				while(this.pawnnumber == 2){
					this.x = 2;
					this.y = 1;
				}
				while(this.pawnnumber == 3){
					this.x = 3;
					this.y = 1;
				}
				while(this.pawnnumber == 4){
					this.x = 4;
					this.y = 1;
				}
				while(this.pawnnumber == 5){
					this.x = 5;
					this.y = 1;
				}
			}
		if(this.color == "blue"){
			for(let i = 0; i <= 5; i++) {
				this.pawnnumber = i;
				}
				while(this.pawnnumber = 1) {
					this.x = 1;
					this.y = 5;
				}
				while(this.pawnnumber == 2){
					this.x = 2;
					this.y = 5;
				}
				while(this.pawnnumber == 3){
					this.x = 3;
					this.y = 5;
				}
				while(this.pawnnumber == 4){
					this.x = 4;
					this.y = 5;
				}
				while(this.pawnnumber == 5){
					this.x = 5;
					this.y = 5;
				}
			}
	},
}

//Begin Game function
const game = {
//solicit button click for color. Player one, which color would you rather be?
//make pawns























}