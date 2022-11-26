const books = ['oli1', 'oli2', 'oli3']
document.getElementById("bun").onclick = function(){
    var book = document.getElementById("texts").value;
    if(book == books[1]){
        console.log("the book is there");
    }
    else{
        console.log("do you mean...");
    }
}
