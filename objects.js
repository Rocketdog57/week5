//title , author name, genre, short description, price, seller, buyNow -method that shows price and seller, learnMore - method that shows name, genre, and short description.

var book = {
	genre: "Nonfiction",
	author: "Sun Tze",
	title: "The Art of War",
	desc: "The book contained a detailed explanation and analysis of the Chinese military, from weapons and strategy to rank and discipline. Sun also stressed the importance of intelligence operatives and espionage to the war effort. Because Sun has long been considered to be one of history's finest military tacticians and analysts, his teachings and strategies formed the basis of advanced military training for centuries to come.",
	seller: "Chegg"
	price: 7
	
	buyNow : function () {
	  return this.price + " " + this.seller;
	},
	learnMore: function() {
	  return this.author + " " + this.title + " " +
		this.desc;
	}
  }
  
  console.log(book.buyNow());
  console.log(book.learnMore());