import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: center;


  // @media screen and (max-width: 900px) {
  //   flex-direction: column;
  //   align-items: center;
  //   margin-top:20px;
  // }

  display:grid;
  grid-template-columns: 1fr;

  img{
  width: 100%;
  object-fit: cover;
  }


  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    margin-top: 20px;
  }




`;

// export const ImageContainer = styled.div`


//   @media screen and (max-width: 800px) {
//     margin-right: 0;
//     margin-bottom: 20px;
   
//   }

//   img{
//     // width: 500px;
//     // height: 500px;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 0.5rem;
//   }
      
//     }

    
// `;

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
