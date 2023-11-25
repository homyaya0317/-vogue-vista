import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems,productToAdd) =>{


    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id)
    

    //The use of cartItems.map creates a new array rather than modifying the existing one
    if(existingCartItem){
        return cartItems.map(cartItem =>cartItem.id === productToAdd.id?

            {...cartItem,quantity:cartItem.quantity + 1} 
            :cartItem
            )
    }


    //it creates a new array by spreading the existing cartItems and adding a new object
    // representing the productToAdd with a quantity of 1.
    
    return[...cartItems,{...productToAdd,quantity:1}]
}


const removeCartItem = (cartItems,cartItemToRemove)=>{

    const existingCartItem = cartItems.find(
        (cartItem)=>cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }
    return cartItems.map(cartItem =>cartItem.id === cartItemToRemove.id?

        {...cartItem,quantity:cartItem.quantity - 1} :
        cartItem
        )

}



const clearCartItem = (cartItems,cartItemToClear) =>{

   return cartItems.filter(cartItem=>cartItem.id!==cartItemToClear.id)
}



export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean)
}


export const addItemToCart = (cartItems,productToAdd) =>{
    const newCartItems = addCartItem(cartItems,productToAdd)

    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems) 
 }

 export const removeItemToCart = (cartItems,cartItemToRemove) =>{
     const newCartItems = removeCartItem(cartItems,cartItemToRemove)
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
     
 }
 export const clearItemFromCart = (cartItems,cartItemToClear) =>{

     const newCartItems = clearCartItem(cartItems,cartItemToClear)
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
     
 }


 