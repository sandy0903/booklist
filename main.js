class Books {
    constructor (title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}



class UI {
    static displayBooks(){
        const StoredBooks=[
            {
                title:"Book One",
                author:"John Doe",
                isbn:"343434"
            },
            {
                title:"Book Two",
                author:"Jane Doe",
                isbn:"45545"
            }
        ];
        const books=StoredBooks;
        books.forEach((book)=> UI.addBookToList(book));
    }
    static addBookToList(book){
        const list=document.querySelector("#book-list");
        const row=document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
    static deleteBook(e){
        if (e.classList.contains("delete")){
            e.parentElement.parentElement.remove();
        }

    }
    static clearFields(){
        document.querySelector("#title").value=" ";
        document.querySelector("#author").value=" ";
        document.querySelector("#isbn").value=" ";
    }
}

//store class: handles storage

//display:books
document.addEventListener("DOMContentLoaded",UI.displayBooks);
//event:add a book
document.querySelector("#book-form").addEventListener("submit",(e)=> {
   // prevent actual submit
   e.preventDefault();
    //get form values

    const title=document.querySelector("#title").value;
    const author=document.querySelector("#author").value;
    const isbn=document.querySelector("#isbn").value;

    //instatiable book
    const book =new Books(title, author , isbn);
    //add book to ui
    UI.addBookToList(book);
    //clear field
    UI.clearFields();
});
//event :remove a book
document.querySelector("#book-list").addEventListener("click",(e)=>{
    UI.deleteBook(e.target)
});