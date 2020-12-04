function Book(title, author, n_pages, read_status){
    this.title = title
    this.author = author
    this.n_pages = n_pages
    this.read_status = read_status
    this.info = function(){
        text_info = `${this.title} by ${this.author}, ${this.n_pages} pages, ${this.read_status}.`
        return text_info
    }
}
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
console.log(hobbit.info())