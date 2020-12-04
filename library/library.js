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

function displayBooks(library){
    console.table(library)
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
const mbovary = new Book("Madame Bovary", "G. Flaubert", 315, "read" )
const republic = new Book("Republic", "Plato", 415, "read")
const pEssays = new Book ("Political Essays", "D. Hume", 125, "not read yet")

addBookToLibrary(hobbit)
addBookToLibrary(mbovary)
addBookToLibrary(republic)
addBookToLibrary(pEssays)

//console.log(myLibrary)
//console.log(hobbit.info())
displayBooks(myLibrary)