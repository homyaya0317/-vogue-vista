import { Routes, Route } from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component"
import Category from "../category/category.component"
import { fetchCategoriesAsync, fetchCategoriesStart } from "../../store/categories/categories.action"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

import Product from "../product/product.component"



const Shop = () => {


  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(fetchCategoriesStart())

  }, [dispatch])



  return (

    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category/*" element={<Product/>} />
    </Routes>
  )
}



export default Shop   



//   <Routes>
//   <Route index element={<CategoriesPreview />} />
//   <Route exact path="categories/:category" element={<Category />} />
//   <Route exact path="categories/:category/:itemName" element={<ProductDescription />} />
// </Routes>