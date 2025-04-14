let bookList = [
    {
        name: "Harry potter",
        author: "JK Rowling",
        year: "1995",
        category: "Fiction"
    }
]
const tbodyEL = document.querySelector('tbody')
const formEditEl = document.querySelector("#form_edit")

function renderData( data = bookList){
    let dataHTML = ``
    for(let i = 0 ; i < bookList.length ; i++){
        dataHTML +=`
        <tr>
            <td>${data[i].name}</td>
            <td>${data[i].author}</td>
            <td>${data[i].year}</td>
            <td>${data[i].category}</td>
            <td>
                <button class ="btn-blue" onclick="loadEditData(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Sửa</button>
                <button class ="btn-blue" onclick="deleteBook(${i})">Xoá</button>
            </td>
          </tr>
        `
    }
    tbodyEL.innerHTML = dataHTML
}
function addBook(event){
    event.preventDefault()
    bookList.push({
        name: event.target.name.value,
        author: event.target.author.value,
        year: event.target.year.value,
        category: event.target.category.value
    })
    renderData()
    event.target.reset()
}
function loadEditData(index){
    formEditEl.index.value = index
    formEditEl.name.value = bookList[index].name
    formEditEl.author.value = bookList[index].author
    formEditEl.year.value = bookList[index].year
    formEditEl.category.value = bookList[index].category
}
function updateBook(event){
    event.preventDefault()
    let index = event.target.index.value
    let name = event.target.name.value
    let author = event.target.author.value
    let year = event.target.year.value
    let category = event.target.category.value
    let data = {
        name,
        author,
        year,
        category
    }
    bookList[index] = data
    renderData()
    event.target.querySelector("button").click()
}
renderData()
function deleteBook(index){
    if(confirm("Ban co chac chan muon xoa khong?")){
        bookList.splice(index,1)
        renderData()
        alert("xoa thanh cong")
    }
}
function searchBook(){
    let contentSearch = document.querySelector('#ip_search').value.toLowerCase()
    let arrayResult = []
    for(let i = 0; i < bookList.length; i++) {
        if(bookList[i].name.toLowerCase().includes(contentSearch.toLowerCase())) {
            arrayResult.push(bookList[i])
        }
    }
    renderData(arrayResult)
}