export let cart = [{
    productDescription:"affle with berries",
    quanity: 1
},{
   productDescription:"Pistachio Baklava",
    quanity: 2  
}];


  export function addToCart(productDescription) {
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

         export   function removeFromCart(productDescription){
                const newCart =[];
                cart.forEach((cartItem)=>{
                    if(cartItem.productDescription != productDescription){
                        newCart.push(cartItem)
                    }
                    
                })
                  cart = newCart
                  
                  
            }