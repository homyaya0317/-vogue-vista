import styled from "styled-components"
import { Link } from "react-router-dom"


export const NavigationContainer = styled.div`
     height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width :800px){
      height:60px;
      padding:10px;
      margin-bottom:20px

  }
  
    `;


export const LogoContainer = styled(Link)`
       height: 100%;
       width: 70px;
       padding: 25px;
       font-size: 25px;
       @media screen and (max-width :800px){
            width:50px;
            padding:0
   
       }
       
       
  `


export const NavLinks = styled.div`
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @media screen and (max-width :800px){
            width:100%;
        }
        
  
  `


  export const CurrentUser  = styled.div` 
     color: green;
     font-weight:bold;

   
  `



  export const NavLink = styled(Link)`
      padding: 10px 15px;
      cursor: pointer;
      font-size: 20px;
 
  `



  export const CategoryNavigationContainer = styled.div`

        height: 70px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
        @media screen and (max-width: 800px) {
            height: 60px;
            padding-left: 380px; 
            padding-right: 10px;
            margin-bottom: 20px;
          }

       
  `


  export const CategoryNavLink = styled(Link) `
        color: #333; 
        width: 50%;
        text-decoration: none;
        padding: 10px;
        margin: 5px;
        border: none 
        border-radius: 5px;
       text-align:center;
        font-size: 25px;

        &:hover {
            background-color: green;
            color:white;
            font-weight:bold;
        }

        @media screen and (max-width: 800px) {
            width: 80%;
          }

       
        
        
  `


  export const InfoContainer = styled.div`

    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left:250px;
    margin-top: 100px;
    @media screen and (max-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
      margin-left: 10px; 
      margin-right: 10px;
      margin-top: 20px;
    }

    
    

  `

  export const InfoSection = styled.div`

     text-align: center;

        h2 {
        font-size: 25px;
        color: #333;
        }

        h4 {
        font-size: 19px;
        color: #666;
        }

        @media screen and (max-width: 800px) {
            text-align: left;
          }

  
  `


 





