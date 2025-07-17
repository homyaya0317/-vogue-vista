import styled, { css } from 'styled-components';

export const ConfirmContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 700px;
  height: 300px;
  border-radius: 20px;
  background-color: rgb(237, 235, 235);
  display: flex;
  flex-flow: column;
  // justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  @media screen and (max-width:800px){
       width:80%

  }
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;
    @media screen and (max-width:800px){
     font-size:1.5rem;

  }
`;

export const Button = css`
  border: 1px solid #ccc;
  background-color: #fff;
  width: 180px;
  height: 60px;
  border-radius: 20px;
  font-size: 28px;
`;

export const Yes = styled.button`
  ${Button}
  background-color: green;
  border: none;
  margin-right: 50px;
  color: white;

   @media screen and (max-width:800px){
     font-size:1.5rem;

  }
`;

export const No = styled.button`
  ${Button}
`;

