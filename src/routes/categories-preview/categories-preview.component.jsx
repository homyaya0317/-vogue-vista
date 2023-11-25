
import CategoryPreview from "../../components/category-preview/category-preview.component"
import { Fragment } from "react"

import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selector"
import Spinner from "../../components/spinner/spinner.component"
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector"


const CategoriesPreview = () => {



  // const { categoriesMap } = useContext(CategoriesContext)

  const categoriesMap = useSelector(selectCategoriesMap)

  const isLoading = useSelector(selectCategoriesIsLoading)




  // categoriesMap is a object
  //{hats: Array(9), jackets: Array(5), mens: Array(6), sneakers: Array(8), womens: Array(7)}


  // Array中的每一个元素是一个对象： {id: 1, imageUrl : "https://i.ibb.co/ZYW3VTp/brown-brim.png",name:"Brown Brim",price:25}
  //[{},{}]


  return (



    <Fragment>


      {
        isLoading ? <Spinner /> :
          (

            Object.keys(categoriesMap).map(title => {

              const products = categoriesMap[title]

              return <CategoryPreview key={title} title={title} products={products} />
            })

          )
      }



    </Fragment>

  )
}

export default CategoriesPreview