import { useContext, useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../../components/product-card/product-card.component"

import "./category.styles.scss"

const Category = () => {

    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)

    //categoriesMap是从firestore获取的，是异步的

    //categoriesMap 是object， categoriesMap[category] 是object[属性的方式]
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {

        setProducts(categoriesMap[category])

    }, [category, categoriesMap])

    return (

        <Fragment>

            <h2 className="category-title">{category.toUpperCase()}</h2>

            <div className="category-container">

                {products && products.map((product) =>
                    (<ProductCard key={product.id} product={product} />)

                )}
            </div>
        </Fragment>



    )
}

export default Category