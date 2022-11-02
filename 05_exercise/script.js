let books = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        sold: false,
        inStock: true,
        price: 60,
    }, 
    {
        title: 'Samarkand',
        author: 'Amin Maalouf',
        sold: false,
        inStock: true,
        price: 80,
    },
    {
        title: 'Love in the Time of Cholera',
        author: 'Gabriel García Márquez',
        sold: true,
        inStock: false,
        price: 100,
    }
];

let sortedBooks = books.sort(
    (t1, t2) => (t1.title > t2.title) ? 1 : (t1.title < t2.title) ? -1 : 0);

function addNewBook(books) {
    let newBook = {
        title : prompt('Add the book title'),
        author : prompt('Add the author name'),
        sold : prompt('Is it sold out: true or false?'),
        inStock : prompt('Is it in the stock: true or false?'),
        price : prompt('Add the book price'),}
        books.pop(newBook);
        addBookPage(newBook)
}
function addBookPage (element){
   
        let liElement = document.createElement("li");
        liElement.innerHTML = `<br>Title: ${element.title}<br>Author: ${element.author}<br>Price: ${element.price} Fr.<br><br><br>`;
        document.body.append(liElement);
        let checkSold = document.createElement("input");
        let checkSoldLabel = document.createElement("label");
            checkSoldLabel.setAttribute("for", "sold");
            checkSoldLabel.innerText = `Sold  `;
            checkSold.setAttribute("type", "checkbox");
            checkSold.setAttribute("name", "sold");
            checkSold.setAttribute("id", "sold");
        if (element.sold == true){
            checkSold.setAttribute('checked', 'true');
        }
        liElement.append(checkSold);
        liElement.append(checkSoldLabel);
        let checkInStock = document.createElement("input");
        let checkInStockLabel = document.createElement("label");
            checkInStockLabel.setAttribute("for", "inStock");
            checkInStockLabel.innerText = ` || In Stock  `;
            checkInStock.setAttribute("type", "checkbox");
            checkSold.setAttribute("name", "inStock");
            checkSold.setAttribute("id", "inStock");
        if (element.inStock == true){
            checkInStock.setAttribute('checked', 'true');
        }
        liElement.append(checkInStockLabel);
        liElement.append(checkInStock);
        
    
}

let listElement = document.createElement("ul");
sortedBooks.forEach(element => {
    addBookPage(element)
})
