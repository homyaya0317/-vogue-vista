import { useContext, useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../components/product-card/product-card.component"

import {CategoryContainer,CategoryTitle} from "./category.styles"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selector"

const Category = () => {

    const { category } = useParams()
    // const { categoriesMap } = useContext(CategoriesContext)
    
    const categoriesMap = useSelector(selectCategoriesMap)
   

  

    //categoriesMap是从firestore获取的，是异步的

    //categoriesMap 是object， categoriesMap[category] 是object[属性的方式]
    const [products, setProducts] = useState(categoriesMap[category])

    

    useEffect(() => { 
        setProducts(categoriesMap[category])

    }, [category, categoriesMap])

    

    return (

        <Fragment>

            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

            <CategoryContainer>

                {products && products.map((product) =>
                    (<ProductCard key={product.id} product={product} />)

                )}
            </CategoryContainer>
        </Fragment>



    )
}

export default Category