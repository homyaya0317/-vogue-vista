import {CategoryPreviewContainer,Title,Preview} from "./category-preview.styles"

import ProductCard from "../product-card/product-card.component"



const CategoryPreview = ({title,products}) => {


    return(
        <CategoryPreviewContainer>

            <h2 className="mt-5 ms-0">
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products
                    .filter((_,idx)=> idx < 4)
                    .map((product)=>(

                        <ProductCard key={product.id} product={product}/>
                    )

                    )

                }
            </Preview>

        </CategoryPreviewContainer>

    )
}

export default CategoryPreview