import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 50px 0;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  padding: 0 10px;
  margin-left: 10px;

  font-size: 18px;
  border: 1px solid #951f99;
  border-radius: 6px;
`;

export const Button = styled.button`
  width: 110px;
  height: 35px;
  padding: 0;
  margin-top: 15px;

  font-size: 18px;

  border: 1px solid #951f99;
  border-radius: 6px;
  background-color: white;

  cursor: pointer;

  :hover,
  :focus {
    background-color: #951f99;
    color: white;
  }
`;
