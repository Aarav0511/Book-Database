class Book {
    constructor(title, author, year){
        this.title = title
        this.author= author
        this.year= year
    }
}
const defaultBooks = [
    {
        title:'The Brilliant World Of Tom Gates',
        author: 'Liz Pichon',
        year: '2022'
    },
    {
        title:'The Chocolate Chase',
        author: 'Geronimo Stilton',
        year: '2017'
    },
    {
       title:'Young Chefs',
        author: 'Vikas Khanna',
        year: '2013' 
    }
]
class UI{

    static addBookToList = (book) =>{
        const list = document.getElementById('book-list');
    const row =document.createElement('tr')

    row.innerHTML=`<td>${book.title}</td><td>${book.author}</td><td>${book.year}</td>`

    list.appendChild(row)
}
static displayBooks=()=>{
    defaultBooks.forEach(book=>UI.addBookToList(book))
}
}
UI.displayBooks()

document.querySelector('#book-form').addEventListener('submit',addABook)

function addABook(e) {
    //prevent actual submission
    e.preventDefault()
    //Get Form Values
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;

const year=document.querySelector('#year').value;
    //instantiate a new Book object
    const book = new Book(title,author,year)
    //Add object to UI
    UI.addBookToList(book)
}