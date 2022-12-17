
let myLibrary = []


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

    const sameBook = myLibrary.some(element => {
        if (element.title === titleValue && element.author === authorValue) {
            return true;
        }

        return false;
    });

    if (sameBook === true) {
        alert("Book already added");
    } else if (titleValue != "" && sameBook === false && authorValue != "" && pagesValue != "") {
        const book1 = new Book(titleValue, authorValue, pagesValue, checkValue)
        myLibrary.push(book1)
        
        var test = document.getElementById("form-card");
        test.style.display = "none";

        addBookUi(book1);
    }
}


let listedBooks = [];


function addBookUi(newBook) {

    const mainGrid = document.querySelector("#main")

    let existingBook = listedBooks.find(book => book.title === newBook.title)

    if (existingBook === undefined) {

        var bookDiv = document.createElement("div");
        bookDiv.id = "bookDiv"
        mainGrid.appendChild(bookDiv);

        var bookTitle = document.createElement("p");
        var bookAuthor = document.createElement("p");
        var bookPages = document.createElement("p");

        bookTitle.innerText = ("Title: " + newBook.title);
        bookAuthor.innerText = ("Author: " + newBook.author);
        bookPages.innerText = ("Pages: " + newBook.pages);

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);

        var removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        bookDiv.appendChild(removeButton);

        removeButton.addEventListener("click", () => {

            let bookIndex = myLibrary.indexOf(newBook);
    
            myLibrary.splice(bookIndex, 1);
    
            bookDiv.remove();
        });
    }

    
        if (newBook.haveRead === true) {
            var readTrue = document.createElement("button");
            readTrue.innerText = "Read"
            readTrue.style.backgroundColor = "green"
            bookDiv.appendChild(readTrue);

            readTrue.addEventListener("click", () => {
                let bookIndex = myLibrary.indexOf(newBook);
                myLibrary[bookIndex].haveRead = !myLibrary[bookIndex].haveRead;

                if (myLibrary[bookIndex].haveRead) {
                    readTrue.innerText = "Read";
                    readTrue.style.backgroundColor = "green";
                } else {
                    readTrue.innerText = "Not read";
                    readTrue.style.backgroundColor = "red";
                }

            })

        } else if (newBook.haveRead === false) {
            var readFalse = document.createElement("button");
            readFalse.innerText = "Not read"
            readFalse.style.backgroundColor = "red"
            bookDiv.appendChild(readFalse);

            readFalse.addEventListener("click", () => {
                let bookIndex = myLibrary.indexOf(newBook);
                myLibrary[bookIndex].haveRead = !myLibrary[bookIndex].haveRead;

                if (myLibrary[bookIndex].haveRead) {
                    readFalse.innerText = "Read";
                    readFalse.style.backgroundColor = "green";
                } else {
                    readFalse.innerText = "Not read";
                    readFalse.style.backgroundColor = "red";
                }

            })

        }

        listedBooks.push(newBook);
    }

const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", addBookToLibrary);


const addBookBtn = document.querySelector(".add-book-btn")

addBookBtn.addEventListener("click", openBookWindow);

function openBookWindow() {
    var test = document.getElementById("form-card");
    test.style.display = "block"
}

const closeBookWindow = document.querySelector(".x")

closeBookWindow.addEventListener("click", closetest);

function closetest() {
    var test = document.getElementById("form-card");
    test.style.display = "none";
}