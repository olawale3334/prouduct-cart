 

let proudctHTML = "";
proudctsI.forEach((proudct)=>{
    
  proudctHTML +=    `<div>
                <div class="relative w-fit mt-5 px-6">
                    <img class="md:w-[18rem] rounded-lg" src="${proudct.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button  class=" addBtn bg-[#fdfdfe]  shadow-lg py-2 px-5 rounded-2xl flex items-center gap-3"><img class="w-8" src="/img/icons8-add-shopping-cart-50.png" alt="">Add to cart</button>
                    </div>
                </div>
                <div class="px-6 mt-5">
                    <p class="text-[#c9b6b4]">${proudct.name}</p>
                    <p class="font-semibold" data-name="">${proudct.describtion}</p>
                    <span class="text-orange-600">$${(proudct.price/100).toFixed(2)}</span>
                </div>
                
            </div>`
})
document.querySelector(".js-grid").innerHTML = proudctHTML

let proudctHTML1 = "";
proudctsII.forEach((proudct)=>{
  proudctHTML1 +=    `<div>
                <div class="relative w-fit mt-5 px-6">
                    <img class="md:w-[18rem] rounded-lg" src="${proudct.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button  class=" addBtn bg-[#fdfdfe]  shadow-lg py-2 px-5 rounded-2xl flex items-center gap-3"><img class="w-8" src="/img/icons8-add-shopping-cart-50.png" alt="">Add to cart</button>
                    </div>
                </div>
                <div class="px-6 mt-5">
                    <p class="text-[#c9b6b4]">${proudct.name}</p>
                    <p class="font-semibold" data-name="">${proudct.describtion}</p>
                    <span class="text-orange-600">$${(proudct.price/100).toFixed(2)}</span>
                </div>
            </div>`
})
document.querySelector(".js-grid2").innerHTML = proudctHTML1

let proudctHTML2 = "";
proudctsIII.forEach((proudct)=>{
  proudctHTML2 +=    `<div>
                <div class="relative w-fit mt-5 px-6">
                    <img class="md:w-[18rem] rounded-lg" src="${proudct.image}" alt="">
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 ">
                        <button  class=" addBtn bg-[#fdfdfe]  shadow-lg py-2 px-5 rounded-2xl flex items-center gap-3"><img class="w-8" src="/img/icons8-add-shopping-cart-50.png" alt="">Add to cart</button>
                    </div>
                </div>
                <div class="px-6 mt-5">
                    <p class="text-[#c9b6b4]">${proudct.name}</p>
                    <p class="font-semibold" data-name="">${proudct.describtion}</p>
                    <span class="text-orange-600">$${(proudct.price/100).toFixed(2)}</span>
                </div>
            </div>`
})
document.querySelector(".js-grid3").innerHTML = proudctHTML2

