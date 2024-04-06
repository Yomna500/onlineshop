
let allproducts = document.querySelector(".products")
let products=[
   {
    id:1,
    title:"Sweater",
    desc:"Brown sweater with pockets",
    price:400,
    imgUrl:"imgs/photo_2024-04-02_14-29-39.jpg"
   },
   {
    id:2,
    title:"Shose",
    desc:"Black neck shose",
    price:250,
    imgUrl:"imgs/photo_2024-04-02_14-57-27.jpg"
   }, 
    {
    id:3,
    title:"Jeans",
    desc:"Blue Wideleg Jeans pants",
    price:300,
    imgUrl:"imgs/photo_2024-04-02_14-57-29.jpg"
   },  
   {
    id:4,
    title:"Hoodie",
    desc:"Beige hoodie star on the middle",
    price:500,
    imgUrl:"imgs/photo_2024-04-02_14-57-36.jpg"
   },
   {
    id:5,
    title:"Boots",
    desc:"Long neck beige boots",
    price:1000,
    imgUrl:"imgs/photo_10_2024-04-06_23-04-47.jpg"
   },
   {
    id:6,
    title:"Hat",
    desc:"Brown hat",
    price:300,
    imgUrl:"imgs/photo_1_2024-04-06_23-04-47.jpg"
   },
   {
    id:7,
    title:"Coat",
    desc:"Winter wite coat",
    price:700,
    imgUrl:"imgs/photo_12_2024-04-06_23-04-47.jpg"
   },
   {
    id:8,
    title:"Long Coat",
    desc:"Long Coat",
    price:1500,
    imgUrl:"imgs/photo_9_2024-04-06_23-04-47.jpg"
   },   {
    id:9,
    title:"T-shirt",
    desc:"white and Black T-shirt",
    price:500,
    imgUrl:"imgs/photo_3_2024-04-06_23-04-47.jpg"
   },
   {
    id:10,
    title:"Pants",
    desc:"Long brown pants",
    price:400,
    imgUrl:"imgs/photo_4_2024-04-06_23-04-47.jpg"
   },
   {
    id:11,
    title:"Scarf",
    desc:"White long scarf",
    price:200,
    imgUrl:"imgs/photo_6_2024-04-06_23-04-47.jpg"
   },
   {
    id:12,
    title:"Jeans",
    desc:"Black pants made of jeans",
    price:600,
    imgUrl:"imgs/photo_8_2024-04-06_23-04-47.jpg"
   },
   {
    id:13,
    title:"Blouse",
    desc:"Light pink blouse",
    price:500,
    imgUrl:"imgs/photo_2024-04-02_14-57-33.jpg"
   },
   {
    id:14,
    title:"Jacket",
    desc:"Fabric jacket",
    price:800,
    imgUrl:"imgs/photo_2_2024-04-06_23-04-47.jpg"
   },
   {
    id:15,
    title:"Shose",
    desc:"White Shose with laces",
    price:650,
    imgUrl:"imgs/photo_11_2024-04-06_23-04-47.jpg"
   },
   {
    id:16,
    title:"Top",
    desc:"Blue top",
    price:1000,
    imgUrl:"imgs/photo_7_2024-04-06_23-04-47.jpg"
   }
   
]
function write(){
    let y = products.map(function (item){
       
        return `
        <div class="container text-center">
        

                <div class="card " style="width: 18rem;">
                    <img src="${item.imgUrl}" class="card-img-top product-img" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.desc}</p>
                      <p style="font-weight: bold; font-size: 18px;">${item.price}EGP</p>
                      <button class="btn btn-primary" style="width: 100px;" onClick="addCart(${item.id})" >Cart</button>
                      <button class="btn btn-secondary" style="width: 100px;"></i>Favorite</button>
                    </div>
                  </div>
              </div>`
              
              
    })
    allproducts.innerHTML = y.join("");
}
write()
// ----------------------------------------
let incart =document.querySelector(".incart")
let cartp =document.querySelector(".carts-products")
let quantity =document.querySelector(".quantity")
let num =0;

let addItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];


if(addItem) {
    addItem.map(item => {
       incart.innerHTML += `<p>${item.title}</p>`;
    })
    quantity.style.display = "block";
    quantity.innerHTML = addItem.length;
}

function addCart(id){
    if(localStorage.getItem("username")){
            let choosed= products.find((item)=> item.id==id)
            incart.innerHTML += `<p>${choosed.title}</p>`

            addItem = [...addItem , choosed]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addItem) )

            let length = document.querySelectorAll(".carts-products div p")
            quantity.style.display ="block";
            quantity.innerHTML = length.length;
    }
    else{
        window.location="login.html"
    }
}

// ----------------------------------------------

let cartin = document.querySelector(".cartin i")

cartin.addEventListener("click",opencart)

function opencart(){
    if(incart.innerHTML !=""){
        if(cartp.style.display=="block"){
           cartp.style.display="none"
        }else {
           cartp.style.display="block";
        }
    } 
}