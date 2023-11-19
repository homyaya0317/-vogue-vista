import { Routes,Route } from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component"
import Category from "../category/category.component"
import { setCategories } from "../../store/categories/categories.action"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.component"



const Shop = () => {
  

  const dispatch = useDispatch()


  useEffect(()=>{

    const getCategoriesMap = async()=>{
        const categories = await getCategoriesAndDocuments("categories")

      //   console.log(categoriesArray);
        dispatch(setCategories(categories))
  
       //console.log(typeof(categoryMap));
       //console.log(categoryMap);
    }
  
     getCategoriesMap()
  },[])
  


  return (


     <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
     </Routes>

  )
}

export default Shop