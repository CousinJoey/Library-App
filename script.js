
let myLibrary = []

let listedBooks = []


function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}


function addBookToLibrary() {

    var titleValue = document.getElementById("title").value;
    var authorValue = document.getElementById("author").value;
    var pagesValue = document.getElementById("pages").value;
    var checkValue = document.getElementById("is-read").checked;

    const isSameBook = myLibrary.some(element => {
        if (element.title === titleValue) {
            return true;
        }

        return false;
    });

    isSameBook ? alert("Book is already added") : emptyFieldsCheck(titleValue, authorValue, pagesValue, checkValue);

}


function emptyFieldsCheck(titleValue, authorValue, pagesValue, checkValue) {
    if (titleValue === "" || authorValue === "" || pagesValue === "") {
        return
    } else {
        appendNewBook(titleValue, authorValue, pagesValue, checkValue)
        console.log(titleValue);
    }
}


function appendNewBook(titleValue, authorValue, pagesValue, checkValue) {
    const newBook = new Book(titleValue, authorValue, pagesValue, checkValue);
    console.log(newBook)
    myLibrary.push(newBook);

    var formCard = document.getElementById("form-card");
    formCard.style.display = "none";

    checkIfRepeatedUi(newBook)
}


function checkIfRepeatedUi(newBook) {

    let selectedBook = listedBooks.find(book => book.title === newBook.title)

    if (selectedBook === undefined) {
        createBookUi(newBook);
    }

}


function createBookUi(newBook) {

    const mainGrid = document.querySelector("#main");

    var bookDiv = document.createElement("div");
    bookDiv.id = "bookDiv"

    var bookTitle = document.createElement("p");
    bookTitle.classList = "bookTitle"
    var bookAuthor = document.createElement("p");
    var bookPages = document.createElement("p");
    var removeButton = document.createElement("button");
    removeButton.classList = "button2"

    bookTitle.innerText = ("'" + newBook.title + "'");
    bookAuthor.innerText = (newBook.author);
    bookPages.innerText = ("Pages: " + newBook.pages);
    removeButton.innerText = "Remove";

    mainGrid.appendChild(bookDiv);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);

    removeButton.addEventListener("click", () => removeBook(newBook, bookDiv));

    if (newBook.haveRead === true) {
        var readIsTrue = document.createElement("button");
        readIsTrue.innerText = "Read";
        readIsTrue.style.backgroundColor = "green";
        readIsTrue.classList = "button1"
        bookDiv.appendChild(readIsTrue); 
        readIsTrue.addEventListener("click", () => changeTrueToFalse(newBook, readIsTrue));
    } else if (newBook.haveRead === false) {
        var readIsFalse = document.createElement("button");
        readIsFalse.innerText = "Not read";
        readIsFalse.style.backgroundColor = "red";
        readIsFalse.classList = "button1"
        bookDiv.appendChild(readIsFalse);
        readIsFalse.addEventListener("click", () => changeFalseToTrue(newBook, readIsFalse)); 
    }

    bookDiv.appendChild(removeButton);

}

function changeTrueToFalse(newBook, readIsTrue) {
    let bookIndex = myLibrary.indexOf(newBook);
    myLibrary[bookIndex].haveRead = !myLibrary[bookIndex].haveRead;

    myLibrary[bookIndex].haveRead ? (readIsTrue.innerText = "Read" , readIsTrue.style.backgroundColor = "green") : (readIsTrue.innerText = "Not read", readIsTrue.style.backgroundColor = "red");
}

function changeFalseToTrue(newBook, readIsFalse) {
    let bookIndex = myLibrary.indexOf(newBook);
    myLibrary[bookIndex].haveRead = !myLibrary[bookIndex].haveRead;

    myLibrary[bookIndex].haveRead ? (readIsFalse.innerText = "Read", readIsFalse.style.backgroundColor = "green") : (readIsFalse.innerText = "Not read" , readIsFalse.style.backgroundColor = "red")
}



function removeBook(newBook, bookDiv) {

    let bookIndex = myLibrary.indexOf(newBook);

    myLibrary.splice(bookIndex, 1);

    bookDiv.remove();

}




const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", addBookToLibrary);


const addBookBtn = document.querySelector(".add-book-btn")

addBookBtn.addEventListener("click", openBookWindow);

function openBookWindow() {
    var formCard = document.getElementById("form-card");
    formCard.style.display = "block"
}

const closeBookWindow = document.querySelector(".x")

closeBookWindow.addEventListener("click", closetest);

function closetest() {
    var formCard = document.getElementById("form-card");
    formCard.style.display = "none";
}

