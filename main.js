let btn = document.querySelectorAll(".btn");

let products = [
    {
        name: "peproni",
        size: 12,
        price: "£" + 7.50,
        inCart: 0  
    },

    {
        name: "special",
        size: 12,
        price: "£" + 7,
        inCart: 0  
    },

    {
        name: "special",
        size: 12,
        price: "£" + 7,
        inCart: 0  
    },

    {
        name: "special",
        size: 12,
        price: "£" + 7,
        inCart: 0  
    },

    {
        name: "special",
        size: 12,
        price: "£" + 7,
        inCart: 0  
    }
]


for(i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        cartNumbers();
 })
}


function onLoadCartNumber (){
    let productNumber = localStorage.getItem('cartNumbers');

    if (productNumber){
        document.querySelector('.nav-item span').textContent = productNumber;
    }
}

function cartNumbers(){
    let productNumber = localStorage.getItem('cartNumbers');

    productNumber = parseInt(productNumber);

    if(productNumber){
        localStorage.setItem("cartNumbers",  productNumber + 1);
        document.querySelector('.nav-item span').textContent = productNumber + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.nav-item span').textContent = 1;
    }
    

}

onLoadCartNumber ();