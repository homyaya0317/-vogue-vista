import {ProductCardContainer,Footer,Name,Price} from "./product-card.styles"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"



import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component"
import { useDispatch } from "react-redux"


const ProductCard = ({product}) =>{
    const dispatch = useDispatch()

    const {name,price,imageUrl} = product

    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems,product))

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick= {addProductToCart}>Add to card</Button>
        </ProductCardContainer>
    )
}
export default ProductCard