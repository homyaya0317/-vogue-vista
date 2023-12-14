
import {Outer,ImgList,Dot} from './home-page.styles'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import "../../assets/homepage_images/homepage.png"

const HomePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // const imgArr = [
    //     "https://i.ibb.co/cvpntL1/hats.png",
    //     "https://i.ibb.co/px2tCc3/jackets.png",
    //     "https://i.ibb.co/0jqHpnp/sneakers.png",
    //     "https://i.ibb.co/GCCdy8t/womens.png",
    //     "https://i.ibb.co/R70vBrQ/men.png"
    // ]
    const imgArr = [
        "https://i.ibb.co/5L5sVgC/woman-homepage.png",
        "https://i.ibb.co/pWm2rgt/hats-homepage.png",
        "https://i.ibb.co/N7nKRK4/sneaker-homepage.png",
        "https://i.ibb.co/Gs968jb/jackets-homepage.png",
        "https://i.ibb.co/P1FTZWY/men-homepage.png"
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



    return (
        <div>




            <Outer>

                <ImgList>
                    {imgArr.map((img, index) => (
                        <li key={index} className={index === currentIndex ? "current" : " "}>
                            <a href="javascript:;">
                                <img src={img} alt={`Image ${index}`} width={800} height={593} />
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

            </Outer>

        </div>
    )
}

export default HomePage