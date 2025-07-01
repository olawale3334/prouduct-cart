import {cart,addToCart, removeFromCart} from '../data/cart.js'
import { productsI,productsII,prodcutsIII } from "../data/food-items.js";

document.addEventListener('DOMContentLoaded', () => {
  renderCart(); 
})


let productHTML = "";
productsI.forEach((product)=>{
    
  productHTML +=    `<div>
                <div class="relative w-fit mt-5">
                    <img class="md:w-[18rem] rounded-lg" src="${product.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button data-product-description="${product.description}" class=" addBtn bg-[#fdfdfe]  shadow-lg px-6 py-2  rounded-2xl flex items-center gap-2 whitespace-nowrap ">
                        <img class="w-6" src="/img/icons8-add-shopping-cart-50.png" alt="">
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
productsII.forEach((product)=>{
   productHTML1 +=    `<div>
                <div class="relative w-fit mt-5 ">
                    <img class="md:w-[18rem] rounded-lg" src="${product.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button data-product-description="${product.description}" class=" addBtn bg-[#fdfdfe]  shadow-lg py-2 px-6 rounded-2xl flex items-center gap-2 whitespace-nowrap  ">
                        <img class="w-6" src="/img/icons8-add-shopping-cart-50.png" alt="">
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
 prodcutsIII.forEach((product)=>{
   productHTML2 +=    `<div>
                <div class="relative w-fit mt-5 ">
                    <img class="md:w-[18rem] rounded-lg" src="${product.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button data-product-description="${product.description}" class=" addBtn bg-[#fdfdfe]  shadow-lg py-2 px-6 rounded-2xl flex items-center gap-2 whitespace-nowrap " >
                        <img class="w-6" src="/img/icons8-add-shopping-cart-50.png" alt="" >
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
       

      function updateCartQuantity() {
        let cartQuantity = 0
    cart.forEach((item)=>{
        cartQuantity += item.quanity
     })
     let allCart = document.querySelectorAll('.addToCart,.addToCart-mobile')
     allCart.forEach((all)=>{
        all.innerHTML = `${cartQuantity}`
     })
     
      }

      

    document.querySelectorAll(".addBtn")
.forEach((button)=>{
 button.addEventListener('click',() =>{
   const productDescription =button.dataset.productDescription;
 
     addToCart(productDescription)
     updateCartQuantity()
     
     
 })
})
      
  function handleDeleteClick(del) {
            const productDescription = del.dataset.productDescription;
            removeFromCart(productDescription);
            
          }



  let products = [...productsI  , ...productsII, ...prodcutsIII]
  
 export function renderCart(){
let cartSumaryHTML = '';
let total = 0;
 
cart.forEach((cartItems)=>{
    const productDescription =cartItems.productDescription
    let macthingProduct = '';
  
     products.forEach((product)=>{
       if(product.description === productDescription){
        macthingProduct = product;
        
       }
       
     })
            
             if(macthingProduct){
              total += macthingProduct.price * cartItems.quanity

               cartSumaryHTML += ` <div class="js-items-container-${macthingProduct.description}" >
                    <p>${macthingProduct.description}</p>
                      <div class=" flex justify-between mt-2 ">
                        <div class="flex gap-3">
                        <span class="text-orange-700">${cartItems.quanity}x</span>
                        <span class="text-[#c9b6b4]">@${(macthingProduct.price/100).toFixed(2)}</span>
                        <span>$${(macthingProduct.price/100).toFixed(2)}</span>
                      </div >
                           <span class="js-delete" data-product-description="${macthingProduct.description}">
                           <i  class=" fas fa-times-circle  text-[#c9b6b4] text-xl cursor-pointer"></i>
                           </span>
                      </div>
                        <hr class="mt-3 mx-5">  
                        
                `   
             }     
})            
               if (cart.length > 0) {
                  cartSumaryHTML += `
                   <div class="mt-5 px-5">
                  <div class="flex justify-between text-lg font-semibold mb-3">
                    <span>Total:</span>
                    <span class="text-orange-700">$${(total / 100).toFixed(2)}</span>
                  </div>
                  <button class="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg">
                    Confirm Order
                  </button>
                   </div>`
                }
     
         let display =   document.querySelectorAll('.cart-display')
                display.forEach((dis)=>{
                dis.innerHTML = cartSumaryHTML

                  dis.querySelectorAll('.js-delete').forEach((del) => {
            del.addEventListener('click', () => handleDeleteClick(del));
          });
             })

             document.querySelectorAll('.empty-cart-text').forEach((emptyMsg) => {
  if (cart.length > 0) {
    emptyMsg.style.display = 'none';
  } else {
    emptyMsg.style.display = 'block';
  }
});
}

        
          
          
                          