import styled from "styled-components";



export const HomepageContainer = styled.div`

   display:flex;
   margin-bottom:60px;
    
`


export const Outer = styled.div`

    width: 900px;
    height: 593px;
    margin: 30px auto;
    position: relative;
  
   
    
`
export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image:${({imageUrl})=>`url(${imageUrl})`}

`


export const Text = styled.div`
   

    height: 90px;
    width:200px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    

    p {
      font-weight: lighter;
      font-size: 16px;
    }


`

export const SideImageLeft = styled.div`
    
 
    margin-left:80px;
    margin-top: 100px;
    width: 270px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    &:hover {
        cursor: pointer;

        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${Text} {

            opacity: 0.9;
            z-index:999;
        }
    }
`
export const SideImageRight = styled.div`
  
    margin-left: 80px;
    margin-top: 100px;
    width: 270px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    &:hover {
        cursor: pointer;

        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${Text} {

            opacity: 0.9;
            z-index:999;
        }
    }
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
  