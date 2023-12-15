import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width :800px){

    width:100%;

  }
    


`;

export const ImageContainer = styled.div`
  margin-right: 200px;

  @media screen and (max-width :800px){

   
  }
    
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;

export const Price = styled.span`
  font-size: 30px;
  

  ::before {
    content: "$";
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Description = styled.p`
  font-size: 25px;

  @media screen and (max-width :800px){
    & button{
      font-size:12px;
    }

    & p{
      font-size:22px;

    }


}
`;
