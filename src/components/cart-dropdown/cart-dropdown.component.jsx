import { useSelector } from "react-redux/es/hooks/useSelector"
import { useNavigate } from "react-router-dom"
import { selectCartItems,selectIsCartOpen } from "../../store/cart/cart.selector"

import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"

import {CartDropdownContainer,EmptyMessage,CartItems} from  "./cart-dropdown.styles"

const CartDropdown = () => {


    const cartItems = useSelector(selectCartItems)
 

    const navigate = useNavigate()


    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
   

    return (
        <CartDropdownContainer>
            <CartItems>

                {cartItems.length? (cartItems.map((item)=>(

                    <CartItem key={item.id} cartItem={item}/>

                ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
            
                 }

           
            </CartItems>
            <Button onClick={goToCheckoutHandler} >Go TO CHECKOUT</Button>

        </CartDropdownContainer>
    )
}

export default CartDropdown



