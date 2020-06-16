var book = {
    author : "한강",
    title : "소년이 온다",
    page : 100,
    genre : "장편소설",
    price : 10000,

    get_price: function () {
        console.log("이 책의 가격은 " + this.price +"원 입니다.")
    }
    
}
console.log(book.author)

console.log(book);
book.get_price();

function Newbook(author, genre, title) {
    this.page = 100;
    this.author = author;
    this.genre = genre;
    this.title = title;

    this.get_price = function(){
        console.log(this.author + "작가님의 책은 10,000원 입니다.");
    }
}

var book_1 = new Newbook('김영하','여행에세이', '여행의 이유');
var book_2 = new Newbook('김사과', '한국소설', '천국에서');

console.log(book_1);
console.log(book_2);

book_1.get_price();
book_2.get_price();