import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1em;
  margin: 5px;
  padding: 10px;
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;