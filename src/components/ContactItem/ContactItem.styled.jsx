import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid green;
  font-size: 20px;
  line-height: 1.16;
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  padding: 8px;
  background-color: #008000e6;
  border-radius: 5px;
  border: 2px solid #008000e6;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.03em;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;
  :hover,
  :focus {
    outline-color: transparent;
    box-shadow: 0 0 0 4 px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    color: #008000e6;
  }
`;
