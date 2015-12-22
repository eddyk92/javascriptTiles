//problem: make book list that moves read books to finished 
//list and first book in list to next to be read 

var readingNow = [];
var booksFinished = [];
var BookList = ['Great Gatsby','FreakEnomics', 'The Earth Is Flat', 'Eloquent JavaScript' ];

// put in for loop

function readingList(){
	for(var i = 0; i < BookList.length; i++){
		
		console.log(BookList[i]);

		BookList.push('harry potter');
		console.log(BookList);


		readingNow.push(BookList[0]);
		console.log(readingNOw);

		BookList.shift();
		console.log(BookList);

		booksFinished.push(readingNow)
		console.log(booksFinished);
	}

}




BookList.push('harry potter');
console.log(BookList);


readingNow.push(BookList[0]);
console.log(readingNOw);

BookList.shift();
console.log(BookList);

booksFinished.push(readingNow)
console.log(booksFinished);


//


var book = [
	book1: 
]

BookList = function(bookTitle){
	this.bookTitle = bookTitle;
	console.log('book added to list');
}

var book1 = new BookList('harry potter');
var book2 = new BookList('great gatsby');

conosle.log(book1.BookList);
console.log(book2.BookList);



	readBooks: '',
	booksNotRead: '',

	//books read
	//books not read
	//
}

Book = function(){
	title: '',
	genre: '',
	author: '',
	read: true;
}

BookList.add(book){
	// add to array
}

.finishCurrentBook()
//after read = true move to read
//last book read = finished
//change next book in line to be read
//next book to be read = moved to first unread book in list

