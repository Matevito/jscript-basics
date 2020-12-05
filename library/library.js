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
    cell.style.height = `160px`
    cell.style.width = `160px`
    cell.style.border = "1px solid black"
    cell.className = "book_cell"

    //book info
    title = document.createElement("p")
    title.textContent = `${book.title}`
    cell.appendChild(title)

    author = document.createElement("p")
    author.textContent = `${book.author}`
    cell.appendChild(author)

    n_pages = document.createElement("p")
    n_pages.textContent = `${book.n_pages}`
    cell.appendChild(n_pages)

    read_status = document.createElement("p")
    read_status.textContent = `${book.read_status}`
    cell.appendChild(read_status)

    return cell
}

const book_container = document.getElementById("book_table");
function displayBooks(library){
    //todo: add flexbox?
    for (book of library){  
        let book_cell = bookCell(book);
        console.log(book_cell);
        book_container.appendChild(book_cell);
    }
};

//check the app
displayBooks(myLibrary)