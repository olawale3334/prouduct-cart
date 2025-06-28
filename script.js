
let cart = [{
    productDescription:"affle with berries",
    quanity: 1
},{
   productDescription:"Pistachio Baklava",
    quanity: 2  
}];
let productHTML = "";
productsI.forEach((product)=>{
    
  productHTML +=    `<div>
                <div class="relative w-fit mt-5 px-6">
                    <img class="md:w-[18rem] rounded-lg" src="${product.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button data-product-description="${product.description}" class=" addBtn bg-[#fdfdfe]  shadow-lg py-2 px-5 rounded-2xl flex items-center gap-3">
                        <img class="w-8" src="/img/icons8-add-shopping-cart-50.png" alt="">
                        Add to cart</button>
                    </div>
                </div>
                <div class="px-6 mt-5">
                    <p class="text-[#c9b6b4]">${product.name}</p>
                    <p class="font-semibold">${product.description}</p>
                    <span class="text-orange-600">$${(product.price/100).toFixed(2)}</span>
                </div>
                
            </div>`
})
document.querySelector(".js-grid").innerHTML =  productHTML

let  productHTML1 = "";
prodcutsIII.forEach((product)=>{
   productHTML1 +=    `<div>
                <div class="relative w-fit mt-5 px-6">
                    <img class="md:w-[18rem] rounded-lg" src="${product.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button data-product-description="${product.description}" class=" addBtn bg-[#fdfdfe]  shadow-lg py-2 px-5 rounded-2xl flex items-center gap-3">
                        <img class="w-8" src="/img/icons8-add-shopping-cart-50.png" alt="">
                        Add to cart</button>
                    </div>
                </div>
                <div class="px-6 mt-5">
                    <p class="text-[#c9b6b4]">${product.name}</p>
                    <p class="font-semibold">${product.description}</p>
                    <span class="text-orange-600">$${(product.price/100).toFixed(2)}</span>
                </div>
            </div>`
})
document.querySelector(".js-grid2").innerHTML =  productHTML1

let  productHTML2 = "";
productsII.forEach((product)=>{
   productHTML2 +=    `<div>
                <div class="relative w-fit mt-5 px-6">
                    <img class="md:w-[18rem] rounded-lg" src="${product.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button data-product-description="${product.description}" class=" addBtn bg-[#fdfdfe]  shadow-lg py-2 px-5 rounded-2xl flex items-center gap-3" >
                        <img class="w-8" src="/img/icons8-add-shopping-cart-50.png" alt="" >
                        Add to cart</button>
                    </div>
                </div>
                <div class="px-6 mt-5">
                    <p class="text-[#c9b6b4]">${product.name}</p>
                    <p class="font-semibold">${product.description}</p>
                    <span class="text-orange-600">$${(product.price/100).toFixed(2)}</span>
                </div>
            </div>`
})
document.querySelector(".js-grid3").innerHTML =  productHTML2

       function addToCart(productDescription) {
                let macthingItem;

            cart.forEach((item)=>{
                if(productDescription === item.productDescription){
                    macthingItem = item
                }
            });

            if(macthingItem){
                macthingItem.quanity +=1
            }else{
                cart.push({
                productDescription:productDescription,
                quanity: 1
        })
            }
            }


document.querySelectorAll(".addBtn")
.forEach((button)=>{
 button.addEventListener('click',() =>{
   const productDescription =button.dataset.productDescription;
 
     addToCart(productDescription)
    
     let cartQuantity = 0
     cart.forEach((item)=>{
        cartQuantity += item.quanity
     })
     let allCart = document.querySelectorAll('.addToCart,.addToCart-mobile')
     allCart.forEach((all)=>{
        all.innerHTML = `${cartQuantity}`
     })
 })
})
      

  let products = [...productsI  , ...productsII, ...prodcutsIII]
  console.log(products);
  
let cartSumaryHTML;
 
cart.forEach((cartItems)=>{
    const productDescription =cartItems.productDescription
    let macthingProduct = '';
  
     products.forEach((product)=>{
       if(product.description === productDescription){
        macthingProduct = product;
         console.log(macthingProduct);
       }
       
     })
             cartSumaryHTML += ` 
                    <p>${macthingProduct.description}</p>
                      <div class="flex justify-between mt-2 ">
                        <div class="flex gap-3">
                        <span class="text-orange-500">${cartItems.quanity}x</span>
                        <span class="text-[#c9b6b4]">@${macthingProduct.price}</span>
                        <span>$${macthingProduct.price}</span>
                      </div>
                          <i class="fas fa-times-circle  text-[#c9b6b4] text-xl cursor-pointer"></i>
                      </div>
                      <hr class="mt-3 mx-5">
                `

             let display =   document.querySelectorAll('.cart-display')
             display.forEach((dis)=>{
                dis.innerHTML = cartSumaryHTML
               
             })

         
    
})

  console.log(cartSumaryHTML);


    
             

             