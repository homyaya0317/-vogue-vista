import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../store/categories/categories.selector";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner/spinner.component";
import Counter from "../components/counter/counter-component";
import { selectCartItems } from "../store/cart/cart.selector";
import Button,{BUTTON_TYPE_CLASSES} from "../components/button/button.component"
import { addItemToCart } from "../store/cart/cart.action";
import {
  ProductDescriptionContainer,
  ImageContainer,
  Title,
  Price,
  Description,

} from "./product-description.styles"


const ProductDescription = () => {

    const dispatch = useDispatch()
  const { category, itemName } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [product, setProduct] = useState(null);
  const cartItems =  useSelector(selectCartItems)


  useEffect(() => {
    if (categoriesMap[category]) {
      const foundProduct = categoriesMap[category].find(product => product.name === itemName);
      setProduct(foundProduct);
    }
  }, [categoriesMap, category, itemName]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, price, imageUrl,description } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems,product))

  const cartItem = cartItems.find(cartItem=>cartItem.name===itemName)




  return (

    isLoading?<Spinner />:
    <ProductDescriptionContainer>
        <ImageContainer>
        <img src={imageUrl} alt={name} width={800} height={800}/>

        </ImageContainer>
      
      <Description>
        <Title>{name}</Title>
        <Price>${price}</Price> 
        <Counter cartItem={cartItem} />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick= {addProductToCart}>Add to cart</Button>
        <p className="Description">Description: {description}</p>   
      </Description>
    </ProductDescriptionContainer>
  );
};

export default ProductDescription;
