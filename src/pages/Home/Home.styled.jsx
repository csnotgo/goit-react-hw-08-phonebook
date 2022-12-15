import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 50px 0;
`;

export const FeaturesList = styled.ul`
  text-align: center;
  list-style: circle;

  li {
    margin-top: 15px;

    text-align: start;
    font-size: 18px;
  }
`;

export const LinksList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 40px;
`;
