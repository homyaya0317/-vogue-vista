import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectCartItems } from "../../store/cart/cart.selector"
import { clearItemFromCart,removeItemToCart,addItemToCart } from "../../store/cart/cart.action"


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

    const {id, name, imageUrl, quantity, price } = cartItem


    const cartItems = useSelector(selectCartItems)

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem)) 
    

    const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem))
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems,cartItem))


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>

            <BaseSpan>{name}</BaseSpan>

            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
          
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

        </CheckoutItemContainer>

    )

}

export default CheckoutItem