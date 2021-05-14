let btn = document.querySelectorAll(".btn");

let products = [
    {
        name: "peproni",
        size: 12,
        tag: "peproni",
        price: 7.50,
        inCart: 0
    },

    {
        name: "special",
        size: 12,
        tag: "special",
        price: 7,
        inCart: 0
    },

    {
        name: "mightymeaty",
        size: 12,
        tag: "mightymeaty",
        price: 7,
        inCart: 0
    },

    {
        name: "special",
        size: 12,
        tag: "hawaian",
        price: 7,
        inCart: 0
    },

    {
        name: "special",
        size: 12,
        tag: "cheese& tomato",
        price: 7,
        inCart: 0
    }
];


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.nav-item span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.nav-item span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.nav-item span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsinCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }

        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsinCart", JSON.stringify(cartItems));
}

function totalCost(product) {


    let cartCost = localStorage.getItem("totalCost");


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }




}


function displayCart() {
    let cartItems = localStorage.getItem("productsinCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");

    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {

            productContainer.innerHTML += `
            <div class='products'>
            <ion-icon name="close-outline"></ion-icon>
                //  <img src="img/${item.tag}.jpg">
                   <span>${item.size}</span>
                   <span>${item.name}</span>
            </div>
            <div class="price">£${item.price},0</div>

            <div class="quantity>
               <ion-icon name="caret-up-outline"></ion-icon>
               <span>${item.inCart}</span
               <ion-icon name="caret-down-outline"></ion-icon>
            </div>

            <div class="total">
            £${item.inCart * item.price},0
            </div>
            `;


        });

        productContainer.innerHTML +=
            `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle"> Basket Total </h4>
        <h4 class ="basketTotal"> 
            £${cartCost},00
        </h4> 
        </div>

        `;


    }
}


onLoadCartNumbers();
displayCart();