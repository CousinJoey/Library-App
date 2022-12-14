
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

        addBookUi();
    }
}

const mainGrid = document.querySelector("#main")

function addBookUi() {

    for (let i = 0; i < myLibrary.length; i++) {
        var bookDiv = document.createElement("div");
        mainGrid.appendChild(bookDiv)
        var bookTitle = document.createTextNode("Title:" + myLibrary[i].title)
        bookDiv.appendChild(bookTitle);
    }
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