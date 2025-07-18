
import {HomepageContainer,BackgroundImage,SideImageLeft,SideImageRight,Text,ImgList,Dot} from './home-page.styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import "../../assets/homepage_images/homepage.png"

const HomePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

  
  

    const imgArr = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl":"https://i.ibb.co/pWm2rgt/hats-homepage.png",
            "route": "categories/hats"
          },
          {
            "id": 2,
            "title": "jackets",
            "imageUrl":"https://i.ibb.co/Gs968jb/jackets-homepage.png",
      
            "route": "categories/jackets"
          },
          {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/N7nKRK4/sneaker-homepage.png",
      
            "route": "categories/sneakers"
          },
          {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/5L5sVgC/woman-homepage.png",
            "route": "categories/womens"
          },
          {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/P1FTZWY/men-homepage.png",
            "route": "categories/mens"
          }

    ]


 


    useEffect(() => {

        const timer = setInterval(() => {
            changeImg("next")
        }, 3000)

        return () => clearInterval(timer)

    }, [currentIndex])


    const changeImg = (dir) => {
        let nextIndex;

        if (dir === "next") {
            nextIndex = (currentIndex + 1) % imgArr.length
        } else if (dir === "prev") {
            nextIndex = (currentIndex - 1 + imgArr.length) % imgArr.length
        } else if (typeof dir === "number") {
            nextIndex = dir % imgArr.length
        }

        setCurrentIndex(nextIndex)
    }



    const handleDotClick = (index) => {
        changeImg(index)
    }

 

const navigate = useNavigate()

const onNavigateHandler = () => navigate("/categories")


    return (
        <HomepageContainer>


            
               <ImgList>
                    {imgArr.map((img,index) => (
                        <li key={index} className={index === currentIndex ? "current" : " "}>
                            <a href="javascript:;">
                                <img src={img.imageUrl} alt={`Image ${img.id}`} width={1300} height={893} onClick={()=>navigate(`${img.route}`)}/>
                            </a>
                        </li>

                    ))}
                </ImgList>

                <Dot>

                    {imgArr.map((_, index) => (
                        <a
                            key={index}
                            className={index === currentIndex ? "active" : " "}
                            href="javascript:;"
                            onClick={() => handleDotClick(index)}
                        ></a>
                    ))}

                </Dot>

           



         
        </HomepageContainer>
    )
}

export default HomePage