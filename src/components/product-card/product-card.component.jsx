import {ProductCardContainer,Footer,Name,Price} from "./product-card.styles"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems,selectIsCartOpen } from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.action"


import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component"
import { useDispatch } from "react-redux"
import { useNavigate,useLocation } from "react-router-dom"



const ProductCard = ({product}) =>{
    const dispatch = useDispatch()
    const location = useLocation();


    const isCartOpen = useSelector(selectIsCartOpen)

    const {category,name,price,imageUrl} = product
 

    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () =>{
        dispatch(addItemToCart(cartItems,product))
        dispatch(setIsCartOpen(true))

    } 
 
    const navigate = useNavigate()

   
    
  const onNavigateHandler = () => {
    // Check the current route and construct the destination URL accordingly
    const destination = location.pathname.includes(`${category}`)
      ? `${name}`
      : `${category}/${name}`;

    navigate(destination);
  };



    return(
      
        <ProductCardContainer >
            <img src={imageUrl} alt={`${name}`} onClick={onNavigateHandler}/>
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>   
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick= {addProductToCart}>Add to card</Button>
           
        </ProductCardContainer>
        
     
    )
}
export default ProductCard