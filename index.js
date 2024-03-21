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

function bookDisplay (){
    const bookGrid = document.createElement('div')
    const title = document.createElement('h2')
    title.textContent = myLibrary[i].bookTitle
    const otherInfo = document.createElement('p')
    otherInfo.textContent = myLibrary[i].author + ", " + myLibrary[i].bookLength 
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
    readButton.addEventListener('click', () => {
        if (readButton.checked == true){
            myLibrary[i].readStatus = "yes"
        }
        else {
            myLibrary[i].readStatus = "no"
        }
    })
    bookGrid.id = i
    bookGrid.className = "bookCell"
    const deletionButton = document.createElement('button')
    deletionButton.value = i
    deletionButton.className = "deletionButton"
    deletionButton.textContent = "Delete"
    deletionButton.addEventListener('click', () => {
        deletion(deletionButton.value)
    })
    container.appendChild(bookGrid)
    bookGrid.appendChild(deletionButton)
    form2.appendChild(read)
    form2.appendChild(readButton)
    bookGrid.appendChild(title)
    bookGrid.appendChild(otherInfo)
    bookGrid.appendChild(form2)
    dialog.close()
}
function deletion (value) {
    let o = parseInt(value)
    let element = document.getElementById(value)
    container.removeChild(element)
    delete myLibrary[o]
}