import styled from "styled-components";

export const Outer = styled.div`

    width: 800px;
    height: 593px;
    margin: 100px auto;
    position: relative;
    

`


export const ImgList = styled.ul`

    height: 593px;
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


`
  
 
  
