import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  margin-right: 200px;
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
`;
