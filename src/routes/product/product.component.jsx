
import { Routes, Route } from "react-router-dom"
import Category from "../category/category.component";
import ProductDescription from "../../product-description/product-description.component";



const Product = () => {
    
  
    return (
      <Routes>
        <Route index element={<Category />} />
        <Route path=":itemName" element={<ProductDescription />} />
      </Routes>
    );
  };


  export default Product