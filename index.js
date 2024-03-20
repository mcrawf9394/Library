const myLibrary = []
let i = 0
const container = document.getElementById('bookDisplay')
const addBookBtn = document.getElementById('addBook')
addBookBtn.addEventListener('click', () => {
    dialog.showModal()
})
const dialog = document.querySelector('dialog')
const closeDialog = document.getElementById('form')
closeDialog.addEventListener("submit", function (userEntry) {
    let read
    let author = document.getElementById('author').value
    let title = document.getElementById('bookTitle').value
    let length = document.getElementById('length').value
    let check = document.getElementById('read')
    if (check.checked === true){
        read = "yes"
    }
    else {
        read = "no"
    }
    Book (author, title, length, read)
    userEntry.preventDefault()
})

function Book (author, bookTitle, bookLength, readStatus) {
    const newBook = {
    author: author,
    bookTitle: bookTitle,
    bookLength: bookLength,
    readStatus: readStatus,
    }
    myLibrary.push(newBook)
    bookDisplay (newBook)
    i++
}

function addBookToLibrary (){
 let getAuthor = prompt("Author Name")
 let getBookTitle = prompt("Title")
 let getBookLength = prompt("How Many Pages?")
 let getReadStatus = prompt("Read or unread") 
 Book(getAuthor, getBookTitle, getBookLength, getReadStatus)
}

function bookDisplay (){
    const bookGrid = document.createElement('div')
    const form2 = document.createElement('form')
    const read = document.createElement('label')
    read.textContent = "read?"
    const readButton = document.createElement('input')
    readButton.type = "checkbox"
    if (myLibrary[i].readStatus == "yes"){
        readButton.checked = true
    }
    else {
        readButton.checked = false
    }
    bookGrid.textContent = myLibrary[i].bookTitle + myLibrary[i].author + myLibrary[i].bookLength 
    bookGrid.id = i
    bookGrid.className = "bookCell"
    container.appendChild(bookGrid)
    bookGrid.appendChild(form2)
    form2.appendChild(read)
    form2.appendChild(readButton)
    dialog.close()
}

function removeBook (deletion) {
    container.removeChild(deletion)
}