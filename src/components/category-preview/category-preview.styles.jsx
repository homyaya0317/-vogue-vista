import { Link } from "react-router-dom";
import styled from "styled-components";


export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;


    h2{
        width:140px;
        text-align:center;
        &:hover {
       
            background-color: green;
            color:white;
            
        }
    }

`

export const Title = styled(Link)`

    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    &:hover {
       
        background-color: green;
        color:white;
        
    }
     
   

`

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    @media screen and (max-width :800px){
        grid-template-columns: 1fr 1fr;
        grid-gap:15px
   }


`




