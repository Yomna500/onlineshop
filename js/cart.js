let ProductsInCart = localStorage.getItem("ProductsInCart")
let allProducts = document.querySelector(".products")

if(ProductsInCart){
    let item = JSON.parse(ProductsInCart);
    put(item);
}

function put(products){
    let y = products.map ((item) =>{
        return `
        <div class="container text-center">
        

                <div class="card " style="width: 18rem;">
                    <img src="${item.imgUrl}" class="card-img-top product-img" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.desc}</p>
                      <p style="font-weight: bold; font-size: 18px;">${item.price}EGP</p>
                      <button class="btn btn-primary" style="width: 200px;" onClick="removeCart(${item.id})" >Remove from cart</button>
                    </div>
                  </div>
              </div>`
              
              
    })
    allProducts.innerHTML = y.join("");
}


function removeCart(id){
    let products = JSON.parse(ProductsInCart);
    const index = products.findIndex(item => item.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        localStorage.setItem("ProductsInCart", JSON.stringify(products));
        window.location="cart.html"
    }
}
// function removeItemById(id) {
//     // Get the current items from localStorage
//     const items = JSON.parse(localStorage.getItem('items')) || [];

//     // Find the index of the item with the matching ID
//     const index = items.findIndex(item => item.id === id);

//     if (index !== -1) {
//         // Remove the item from the array
//         items.splice(index, 1);

//         // Save the updated array back to localStorage
//         localStorage.setItem('items', JSON.stringify(items));
//     }
// }


