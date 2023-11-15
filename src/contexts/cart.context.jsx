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

export const CartContext = createContext({

  isCartOpen:false,
  setIsCartOpen:()=>{},
  cartItems:[],
  addItemToCart:()=>{},
  cartCount:0,
  setCartCount:()=>{}
})


export const CartProvider = ({children})=>{

    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)


    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0)
        setCartCount(newCartCount)

    },[cartItems])

    const addItemToCart = (productToAdd) =>{

        setCartItems(addCartItem(cartItems,productToAdd))
        
    }

    const value ={cartCount, setCartCount,isCartOpen,setIsCartOpen,addItemToCart,cartItems}



    return(

        <CartContext.Provider value={value}>
            {children}

        </CartContext.Provider>
    )
}

