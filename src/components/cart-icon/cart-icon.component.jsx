import {CartIconContainer,ShoppingIcon,ItemCount} from "./cart-icon.styles"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"


const CartIcon = () =>{

    const {cartCount,isCartOpen,setIsCartOpen} = useContext(CartContext)
   
    

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)


    return(

        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>

    )
}
export default CartIcon

