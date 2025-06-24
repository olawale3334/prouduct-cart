 
let cart = [];
let productHTML = "";
proudctsI.forEach((product)=>{
    
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
proudctsII.forEach((product)=>{
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
proudctsIII.forEach((product)=>{
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

document.querySelectorAll(".addBtn")
.forEach((button)=>{
 button.addEventListener('click',() =>{
   const productDescription =button.dataset.productDescription;
 

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
     let cartQuantity = 0
     cart.forEach((item)=>{
        cartQuantity += item.quanity
     })
     let allCart = document.querySelectorAll('.addToCart,.addToCart-mobile')
     allCart.forEach((all)=>{
        all.innerHTML = `your cart (${cartQuantity})`
     })
 })
})

