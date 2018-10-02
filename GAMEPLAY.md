/********************************************************************/
Step by Step Game Play
/********************************************************************/

1. Start Button 
2. Solicit input from user on player color, Red or Blue
3. Board sets
	1. 5x5 board CHECK
	2. CHECK Red pawns on one side in a line 1[1,1] 2[1,2] 3[1,3] 4[1,4] 5[1,5] 
	3. CHECK Blue pawns on opposite side in a line 1[5,5] 2[5,4] 3[5,3] 4[5,2] 5[5,1]
	4. First player is determined by random pick
	5. CHECK Five cards are drawn from 16 card deck object, stored in array
	6. CHECK-ish Each user is given two cards, face up
		1. Can't decide if I mutate array and use logic to prevent Red from clicking Blue's cards, 
		or create function to move a card out of the array to replace it with the sideCard, which would mean blue can't click red's cards and vice versa. 
	7. Fifth card sits off to the side, face up
4. CHECK Board is ready
	1. Let Blue/Red know it is their turn
	2. Text prompt to select Pawn number
5. Pawn selected - click pawn on board OR click separate button
	1. Text prompt to select which of player's two cards to use
		2. User clicks card they wish to use
6. Card selected - card enlarges for user to see, but does not cover board
	1. Card shows possible movements, black space indicating where pawn is identified on the board. 
	2. Card itself allows for selection on the card to pick spot player can move to. 
		1. Card is already connected to pawn selected and its location
		2. Card knows from location of pawn its movement restrictions, uses a check system if the possible move is not within the array. So first check is if it's not [0-4,0-4], it's a no go. 
		3. Second check if player pawn is already present, disallow move, text prompt that your pawn is already there
	3. Once clicked, card moves back to position. 
7. Pawn that was selected attempts to move to selected spot.  
	1. If enemy pawn is there, set that enemy pawn's position to null and remove from board.
		1. Print out pawn[0-4]enemy is removed from board!
		2. Remove button or pawn.
	2. If empty, change property position of pawn.
	3. Pawn moves to new div. 
8. REPEAT STEPS 4-7
9. Victory conditions
	1. Enemy sensei-pawn is removed from board. Game over
	2. Player sensei-pawn Red is on position [5,3]Blue or sensei-pawn Blue is on position [1,3]Red, game over.
10. Reset board, bring to start






/***********************DATA STRUCTURE***********************************/
Pawns in div containers:
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
https://api.jquery.com/data/
NOT ARRAYS 
Squares on board and in card in div containers
Multi-dimensional array for board: https://trans4mind.com/personal_development/JavaScript/Array2D.htm


Class for Pawns. Create new set of Pawns Blue, new set of Pawns Red. Differing properties would be starting position. isSensei property for #3 pawn. 

Deck Object: Cards
Cobra {
	constructor(name, movement1, movement2, movement3){
	name: Boar
	movement1: relative position based on pawn [+0,-1]Blue, [+0,+1]Red
	movement2: relative position based on pawn [+1,+0]Blue, [-1,+0]Red
	movement3: relative position based on pawn [+0,+1]Blue, [+0,-1]Red
		
},

};

class Pawn {
	constructor(pawn)
	positionX: null; //use game start method to put in places
	positionY: null; //use game start method to put in places
	color: //call isRed or isBlue based on 
	sensei: null/if pawn is 3. 

}
isSensei(){
	if pawn is 3
}
isRed(){
	
}
isBlue(){
	
}

Possible movement: 
//Boar is [4] in array.
//Red Pawn 1, which is [0], in starting position [1,1] is equal to itself plus moving up/down in board array of arrays. 
pawn[0].position[1,1] = pawn[0].position[1,1] + card[4].movement1[[+0,+1]
pawn[0].position[1,1] = pawn[0].position[1,1] + card[4].movement2[-1,+0]
pawn[0].position[1,1] = pawn[0].position[1,1] + card[4].movement3[+0,-1]

class player new Blue or new Red 

Array board rows, 1 which is [0], 2 is [1], 3, 4, 5, etc. Within [0] is an array [0-4] representing columns. 

Do the positions on board array have any properties? 

const game() {
	start()



}

 
/***************************PREREQUISETES**********************************/
Game is playable in browser only, preferably the latest version of Chrome. 
No installation is needed as libraries are linked in the index.html. 

/**************************WIREFRAME*************************/



/************************GAMEPLAY****************************/

Start with an opening screen. 

/*************************LATER FEATURES**************************/

