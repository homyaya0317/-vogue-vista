import styled from "styled-components";

export const ProductCardContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    // height: 350px;
    align-items: center;
    position: relative;

    img {
      width: 100%;
      height: 90%;
      object-fit: cover;
      margin-bottom: 5px;
   
    }

    &:hover {
      cursor: pointer;
    }

    @media screen and (max-width: 800px) {
       & button{
        font-size:12px;
       }

    }

  
`



export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom:20px;
     margin-top: 20px;




    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 25px;
      display: none;
     
    }

    &:hover {
      
      button {
        opacity: 0.85;
        display: flex;
      }
    }

`





export const Name = styled.span`

    width: 90%;
    margin-bottom: 15px;
    


`
export const Price = styled.span`

    width: 10%;
`




