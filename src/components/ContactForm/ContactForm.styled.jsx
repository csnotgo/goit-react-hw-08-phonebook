import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 50px 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  padding: 0 10px;
  margin-top: 5px;

  font-size: 18px;
  border: 1px solid #951f99;
  border-radius: 6px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 7px 5px 5px 7px;

  border: none;
  border-radius: 50%;
  background-color: green;

  cursor: pointer;
`;
