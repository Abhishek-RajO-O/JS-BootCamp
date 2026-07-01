const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.querySelector('.btn');
const table = document.querySelector('.table');

class Book{
  constructor(title = '',author = '',year=''){
    this.title = title;
    this.author = author;
    this.year = year;
  }  
}  


window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem("books")) {
    const list = [
      {
        title: "White Nights",
        author: "Fyodor Dostoevsky",
        year: 1848
      }
    ];

    localStorage.setItem("books", JSON.stringify(list));
  }
  let books = JSON.parse(localStorage.getItem("books"));  
  if(books){
    books.forEach((element)=> {
      console.log(element);  
      let book = new Book(element.title,element.author,element.year);
      CreateEntry(book);
    });
  }

});

btn.addEventListener('click', function (e) {
  //work on CRUD operation of DOM  
  e.preventDefault();
  let book = new Book(title.value,author.value,year.value);
  CreateEntry(book);
  title.value = null;
  author.value = null;
  year.value = null;
  let books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(book);
  localStorage.setItem('books',JSON.stringify(books));
});


function CreateEntry(book){
  const row = document.createElement('section');
  row.classList.add('table-section');
  row.innerHTML = `<div>${book.title}</div>
          <div>${book.author}</div>
          <div>${book.year}</div>` ;
  table.appendChild(row);
}