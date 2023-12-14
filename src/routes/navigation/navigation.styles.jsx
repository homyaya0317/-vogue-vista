import styled from "styled-components"
import { Link } from "react-router-dom"


export const NavigationContainer = styled.div`
     height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    `;


export const LogoContainer = styled(Link)`
       height: 100%;
       width: 70px;
       padding: 25px;
       font-size: 25px;
      
       
  `


export const NavLinks = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
  
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
            // background-color: #f0f0f0;
            background-color: green;
            color:white;
            font-weight:bold;
        }
        
  `


  export const InfoContainer = styled.div`

    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-left:250px;
    margin-top: 100px

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

  
  `


 





