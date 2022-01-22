const form = document.querySelector("form");
const button = document.querySelector(".add-book");
const tableBody = document.querySelector(".table-body");
const error = document.querySelector(".error")
const addBook = function(title,author,pages){
    const book = {
        title: title,
        author: author,
        pages: pages
    }
    return book
}
const myBook = [];
button.addEventListener("click",function (e){
    e.preventDefault();
    const inputs = form.elements
    console.log(inputs);
    const titleValue = inputs.title.value.toUpperCase()
    const authorValue = inputs.author.value.toUpperCase()
    const pagesValue = inputs.pages.value.toUpperCase()
    if(titleValue.length === 0|| authorValue.length === 0 || pagesValue.length === 0){
     error.innerText = "Please fill all fields.";
    }
    const book = addBook(titleValue, authorValue, pagesValue)
    myBook.push(book);
    addToTable();
    clearForm();
})

const addToTable = function(){
    const tr = document.createElement("tr")
    for(let book of myBook){
        const rowContents = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td>`
    tableBody.innerHTML = rowContents;
        tableBody.append(tr);
    }

}
const clearForm = function () {
    form.reset();
    error.innerText = "";
};