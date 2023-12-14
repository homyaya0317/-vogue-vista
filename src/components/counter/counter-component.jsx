import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./counter.styles.scss"
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { removeItemToCart,addItemToCart } from "../../store/cart/cart.action";
import "./counter.styles.scss"


const Counter = ({ cartItem }) => {

    const dispatch = useDispatch()

   const cartItems = useSelector(selectCartItems)

  

   const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem))
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems,cartItem))


    return (
        <div className="Counter">
            {(cartItem && cartItem.quantity && cartItem.quantity !== 0) ?
                <Fragment>
                    <button className="Minus" onClick={removeItemHandler}><FontAwesomeIcon icon={faMinus} /></button>
                    <span className="Count">{cartItem.quantity}</span>
                    <button className="Plus" ><FontAwesomeIcon icon={faPlus} onClick={addItemHandler} /></button>
                </Fragment> : 
                null
            } 
        </div>
    )
}

export default Counter