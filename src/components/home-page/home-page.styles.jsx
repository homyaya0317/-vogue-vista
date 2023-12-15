import styled from "styled-components";



export const HomepageContainer = styled.div`

      width: 100%;
      height: 893px;
      text-align: center;
      margin: 30px auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 800px) {
        height:300px;
        margin-bottom:10px;
        margin-top:120px;

      }
  
`




export const ImgList = styled.ul`

    height: 593px;
    width:100%;
    list-style: none;
      
          li {
           
            position: absolute;
            opacity: 0;
            transition: opacity 1s;
            
      
            &.current {
              z-index: 1;
              opacity: 1;
            }
          }

          .img{
            width:100%;

          }

          display: flex;
          align-items: center;
          justify-content: center;

          @media screen and (max-width: 800px) {

            height:300px;

            margin-bottom:10px;
            & img{
              width:400px;
              height:300px;
            }



          }





`

export const Dot = styled.div`


    position: absolute;
          display: flex;
          justify-content: center;
          z-index: 3;
          left: 0;
          right: 0;
          bottom: 5px;
          margin: auto;
      
          a {
            width: 20px;
            height: 20px;
            margin: 5px;
            border-radius: 50%;
            background-color: green;
            opacity: 0.5;
      
            &:hover,
            &.active {
              opacity: 1;
            }
          }


          @media screen and (max-width: 800px) {
            a {
              width: 8px; /* Adjusted for smaller screens */
              height: 8px; /* Adjusted for smaller screens */
            }

          }


          @media screen and (max-width :800px){
            left: 70px;
      
          }
        

         

`
  