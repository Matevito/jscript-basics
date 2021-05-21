let myLibrary = [];

function Book(title, author, n_pages, read_status) {
    this.title = title
    this.author = author
    this.n_pages = n_pages
    this.read_status = read_status
    this.info = function () {
        text_info = `${this.title} by ${this.author}, ${this.n_pages} pages, ${this.read_status}.`
        return text_info
    }
};
function addBookToLibrary(book) {
    myLibrary.push(book)
}
// some books to test (books database)
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
const mbovary = new Book("Madame Bovary", "G. Flaubert", 315, true)
const republic = new Book("Republic", "Plato", 415, true)
const pEssays = new Book("Political Essays", "D. Hume", 125, false)

addBookToLibrary(hobbit)
addBookToLibrary(mbovary)
addBookToLibrary(republic)
addBookToLibrary(pEssays)

// show books logic
function bookCell(book) {
    let cell = document.createElement("div");
    cell.style.height = `200px`
    cell.style.width = `175px`
    cell.style.border = "1px solid black"
    cell.className = "book_cell"

    //book info
    title = document.createElement("p")
    title.textContent = `${book.title}`
    cell.appendChild(title)

    author = document.createElement("p")
    author.textContent = `By ${book.author}`
    cell.appendChild(author)

    n_pages = document.createElement("p")
    n_pages.textContent = `pages: ${book.n_pages}`
    cell.appendChild(n_pages)

    read_status = document.createElement("a")
    read_status.classList.add("read_btn")
    read_status.setAttribute("href", "#")
    read_status.value = `${myLibrary.indexOf(book)}`
    if (book.read_status === true) {
        read_status.textContent = `status: read`
    }
    else {
        read_status.textContent = `status: not read yet`
    }
    cell.appendChild(read_status)

    remove_btn = document.createElement("button")
    remove_btn.textContent = "remove_book"
    // asign index in array of the book
    remove_btn.classList.add("rmv_btn")
    remove_btn.value = `${myLibrary.indexOf(book)}`
    cell.appendChild(remove_btn)

    return cell
}

const book_container = document.getElementById("book_table");
function displayBooks(library) {
    let existent_files = document.querySelectorAll(".book_cell")
    let book_table = document.getElementById("book_table")
    for (cell of existent_files) {
        book_table.removeChild(cell)
    }
    //todo: add flexbox?
    for (book of library) {
        let book_cell = bookCell(book);
        book_container.appendChild(book_cell);
    }
    // ad event listener to remove btns
    remove_buttons = document.querySelectorAll(".rmv_btn")
    remove_buttons.forEach((button) => {
        button.addEventListener("//refresh pagelick", function () {
            book_index = button.value
            myLibrary.splice(book_index, 1);
            displayBooks(library)
        })
    })

    readStatus_btns = document.querySelectorAll(".read_btn")
    readStatus_btns.forEach((button) => {
        button.addEventListener("click", function(){
            index = button.value
            current_book = myLibrary[index]
            if (current_book.read_status === true){
                current_book.read_status = false
            }
            else{
                current_book.read_status = true
            }
            displayBooks(library)
        })
    })

};


//new books btn logic
function close_popup() {
    document.querySelector('.bg-modal').style.display = "none"
}
//todo: clean  format when a book is submited

const newBooks_btn = document.getElementById("new_book")
newBooks_btn.addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "flex";
});
document.querySelector('.close').addEventListener("click", function () {
    close_popup();
});
document.querySelector(".button").addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let n_pages = parseInt(document.getElementById("n_pages").value);
    // check this
    let status = document.querySelectorAll(".radio_btn");
    let selected_value;
    for (let option of status){
        if(option.checked){
            if (option.value === "true") {
                selected_value = true
            }
            else {
                selected_value = false
            }
            break;
        }
    }
    //code here: form validation


    //
    console.log(selected_value)
    let new_book = new Book(title, author, n_pages, selected_value);
    addBookToLibrary(new_book);
    displayBooks(myLibrary);
    close_popup();
    // clean the sheet
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("n_pages").value = "";
});

// SUBMIT LOGIC
//check the app
displayBooks(myLibrary)