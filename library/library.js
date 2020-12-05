let myLibrary = [];

function Book(title, author, n_pages, read_status){
    this.title = title
    this.author = author
    this.n_pages = n_pages
    this.read_status = read_status
    this.info = function(){
        text_info = `${this.title} by ${this.author}, ${this.n_pages} pages, ${this.read_status}.`
        return text_info
    }
};
function addBookToLibrary(book){
    myLibrary.push(book)
}
// some books to test (books database)
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
const mbovary = new Book("Madame Bovary", "G. Flaubert", 315, "read" )
const republic = new Book("Republic", "Plato", 415, "read")
const pEssays = new Book ("Political Essays", "D. Hume", 125, "not read yet")

addBookToLibrary(hobbit)
addBookToLibrary(mbovary)
addBookToLibrary(republic)
addBookToLibrary(pEssays)

// show books logic
function bookCell(book){
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

    read_status = document.createElement("p")
    read_status.textContent = `status: ${book.read_status}`
    cell.appendChild(read_status)

    remove_btn = document.createElement("button")
    remove_btn.textContent = "remove_book"
    // asign index in array of the book
    remove_btn.classList.add("remove_btn")
    // add event listener (`${myLibrary.indexOf(book)}`)
    cell.appendChild(remove_btn)

    return cell
}

const book_container = document.getElementById("book_table");
function displayBooks(library){
    let existent_files = document.querySelectorAll(".book_cell")
    let book_table = document.getElementById("book_table")
    for (cell of existent_files) {
        book_table.removeChild(cell)
    }
    //todo: add flexbox?
    for (book of library){  
        let book_cell = bookCell(book);
        book_container.appendChild(book_cell);
    }
};

//new books btn logic
function close_popup(){
    document.querySelector('.bg-modal').style.display = "none"
}
//todo: clean  format when a book is submited

const newBooks_btn = document.getElementById("new_book")
newBooks_btn.addEventListener("click", function (){
    document.querySelector(".bg-modal").style.display = "flex";
});
document.querySelector('.close').addEventListener("click", function() {
	close_popup();
});
document.querySelector(".button").addEventListener("click", function(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let n_pages = parseInt(document.getElementById("n_pages").value);
    let status = document.getElementById("status").value;
    let new_book = new Book(title, author, n_pages, status);
    addBookToLibrary(new_book);
    displayBooks(myLibrary);
    close_popup();
    // clean the sheet
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("n_pages").value ="";
    document.getElementById("status").value = "";
});

    // SUBMIT LOGIC
//check the app
displayBooks(myLibrary)