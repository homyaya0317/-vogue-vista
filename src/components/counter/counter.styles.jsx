import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Plus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: green;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
`;

export const Minus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: green;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
`;

export const Count = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 0 5px;
`;
