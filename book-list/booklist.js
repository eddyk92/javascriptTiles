var readingNow = [];
var booksFinished = [];
var BookList = ['Great Gatsby','FreakEnomics', 'The Earth Is Flat', 'Eloquent JavaScript' ];


function readingList(){
	for(var i = 0; i < BookList.length; i++){
		
		console.log(BookList[i]);

		BookList.push(Book);
		console.log(BookList);


		readingNow.push(BookList[0]);
		readingNow.shift();
		console.log(readingNow);

		BookList.shift();
		console.log(BookList);

		booksFinished.push(readingNow)
		console.log(booksFinished);
	}

}

//============ Game Ro-Sham-Bo
var win = ['paper covers rock', 'sissors beats paper', 'rock beats sissors']

var RoShamBoMaker = function(player, domHand){
	this.player = player;
	this.domHand = domHand;
	this.record = {wins: 0, losses: 0};
	this.wins = [];
	this.getRecord = function(){
		for(var key in this.record){
			return "Player" + player + "has" + this.record[key] + " " + key 
			+ " has" + this.record[key] + " losses";
		}
	}
	this.padRecord = function(){
		this.record.wins +=1;
	};
	this.addLoss = function(){
		this.record.losses += 1;
	};
}

function roShamBoGame(object1, object2){
	if(object1.domHand === right){
		console.log(object1.player + " has that right hand advantage");
	}else if(object2.domHand === left){
		console.log(object2.player + " has that left hand struggle");
	}
	console.log("Get Ready to RO-SHAM-BO!");
}

player1 = new RoShamBoMaker("Kevin", "right");
player2 = new RoShamBoMaker("No Name", "Left");

player1.padRecord()
player2.getRecord()






























