import DirectoryItem from "../directory-item/directory-item.component"
import  {CategoriesContainer} from "./directory.styles"

const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl":"https://i.ibb.co/vxRFWwT/hats.webp",
      "route": "categories/hats"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl":"https://i.ibb.co/djM1FzN/jackets.webp",

      "route": "categories/jackets"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/7KKrFX1/sneakers.jpg",

      "route": "categories/sneakers"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/v4gMFg8/women.webp",
      "route": "categories/womens"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/ZzBjXJk/men.webp",
      "route": "categories/mens"
    }
  ]
  
const Directory = () => {
    
    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            )
            )}
        </CategoriesContainer>

    )
}
export default Directory