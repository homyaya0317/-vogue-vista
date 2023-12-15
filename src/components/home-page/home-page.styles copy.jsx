import styled from "styled-components";



export const HomepageContainer = styled.div`

  //  display:flex;
  //  margin-bottom:60px;
   
  //  @media screen and (max-width :800px){
  //       margin-right:1200px;
  //       margin-bottom:10px;

  // }

    
`


export const Outer = styled.div`

    width: 1400px;
    height: 893px;
    margin: 30px auto;
    position: relative;

    @media screen and (max-width :800px){

      width: 200px;
      
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


          @media screen and (max-width: 800px) {
            & img{
              width:600px;
              height:500px;
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

          @media screen and (max-width :800px){
            left: 70px;
      
          }
        


`
  