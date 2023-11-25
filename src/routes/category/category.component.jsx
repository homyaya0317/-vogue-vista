import {useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../components/product-card/product-card.component"
import Spinner from "../../components/spinner/spinner.component"

import { CategoryContainer, CategoryTitle } from "./category.styles"
import { useDispatch, useSelector } from "react-redux"
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector"


const Category = () => {

   
    const { category } = useParams()
    // const { categoriesMap } = useContext(CategoriesContext)

    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    
    //categoriesMap是从firestore获取的，是异步的

    //categoriesMap 是object， categoriesMap[category] 是object[属性的方式]
    const [products, setProducts] = useState(categoriesMap[category])

    

    useEffect(() => {
        setProducts(categoriesMap[category])

    }, [category, categoriesMap])

  
    


    return (

        <Fragment>

            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <Spinner /> : (

                    <CategoryContainer>

                        {products && products.map((product) =>
                            (<ProductCard key={product.id} product={product} />)

                        )}
                    </CategoryContainer>

                )
            }


        </Fragment>



    )
}

export default Category