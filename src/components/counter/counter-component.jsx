import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {  CounterContainer, Plus, Minus, Count} from "./counter.styles";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { removeItemToCart,addItemToCart } from "../../store/cart/cart.action";



const Counter = ({ cartItem }) => {

    const dispatch = useDispatch()

   const cartItems = useSelector(selectCartItems)

  

   const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem))
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems,cartItem))


    return (
        <CounterContainer>
            {(cartItem && cartItem.quantity && cartItem.quantity !== 0) ?
                <Fragment>
                    <Minus onClick={removeItemHandler}><FontAwesomeIcon icon={faMinus} /></Minus>
                    <Count className="Count">{cartItem.quantity}</Count>
                    <Plus ><FontAwesomeIcon icon={faPlus} onClick={addItemHandler} /></Plus>
                </Fragment> : 
                null
            } 
        </CounterContainer>
    )
}

export default Counter