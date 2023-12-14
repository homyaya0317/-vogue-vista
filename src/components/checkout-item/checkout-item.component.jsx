import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectCartItems } from "../../store/cart/cart.selector"
import { clearItemFromCart,removeItemToCart,addItemToCart } from "../../store/cart/cart.action"
import Counter from "../counter/counter-component"
import Confirm from "../confirm/confirm.component"


import {
CheckoutItemContainer,
ImageContainer,
Quantity,
RemoveButton,
BaseSpan,
Value,
Arrow

    
} from  "./checkout-item.styles"


const CheckoutItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    const [showConfirm,setShowConfirm] = useState(false)

    const {id, name, imageUrl, quantity, price } = cartItem


    const cartItems = useSelector(selectCartItems)

    const showConfirmHandler = () => {
        setShowConfirm(true)

     }

     const cancelHandler = (e) => {
        e.stopPropagation()
        setShowConfirm(false)
    }

    const yesHandler = (e)=> { 
        dispatch(clearItemFromCart(cartItems,cartItem))
        setShowConfirm(false)
    }
    


    return (
        <CheckoutItemContainer>
             {showConfirm && <Confirm confirmText={`Are you sure to clear ${cartItem.name} in the cart?`} onYes = {yesHandler} onCancel={cancelHandler} />}
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>

            <BaseSpan>{name}</BaseSpan>

            <Quantity>  
                <Counter cartItem={cartItem} />   
            </Quantity>
          
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={showConfirmHandler}>&#10005;</RemoveButton>

        </CheckoutItemContainer>

    )

}

export default CheckoutItem