import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-top:180px;
  }
  

`;

export const ImageContainer = styled.div`
  margin-right: 200px;

  @media screen and (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 20px;
   
  }
    
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 50px;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

export const Price = styled.span`
  font-size: 30px;
  

  ::before {
    content: "$";
    font-size: 30px;
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    font-size: 25px;
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

    @media screen and (max-width: 800px) {
      font-size: 20px;
    }


}
`;
