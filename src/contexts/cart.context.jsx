import { createContext,useEffect,useState } from "react";


const addCartItem = (cartItems,productToAdd) =>{


    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id)
    

    //The use of cartItems.map creates a new array rather than modifying the existing one
    if(existingCartItem){
        return cartItems.map(cartItem =>cartItem.id === productToAdd.id?

            {...cartItem,quantity:cartItem.quantity + 1} :
            cartItem
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

export const CartContext = createContext({

  isCartOpen:false,
  setIsCartOpen:()=>{},
  cartItems:[],
  addItemToCart:()=>{},
  removeItemToCart:()=>{},
  clearItemFromCart:()=>{},
  cartCount:0,
  setCartCount:()=>{},
  cartTotal:0,
  setCartTotal:()=>{}

})


export const CartProvider = ({children})=>{

    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)


    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
        setCartCount(newCartCount)

    },[cartItems])

    useEffect(()=>{

        const newCartTotal = cartItems.reduce((total,cartItem)=> total + cartItem.quantity * cartItem.price,0)
        setCartTotal(newCartTotal)

    },[cartItems])



    const addItemToCart = (productToAdd) =>{

        setCartItems(addCartItem(cartItems,productToAdd))
        
    }

    const removeItemToCart = (cartItemToRemove) =>{

        setCartItems(removeCartItem(cartItems,cartItemToRemove))
        
    }
    const clearItemFromCart = (cartItemToClear) =>{

        setCartItems(clearCartItem(cartItems,cartItemToClear))
        
    }



    const value ={cartCount, setCartCount,cartTotal,setCartTotal,isCartOpen,setIsCartOpen,addItemToCart,removeItemToCart,clearItemFromCart,cartItems}



    return(

        <CartContext.Provider value={value}>
            {children}

        </CartContext.Provider>
    )
}

