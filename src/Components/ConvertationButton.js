import React from "react";
import Button from '@mui/material/Button';
import styled from "styled-components";

const StyledButton = styled(Button)`
height: 35px;
`;

export default function ConvertationButton(props) {
  const {handleConvertation} = props;

  return (
    <StyledButton variant="contained" onClick={handleConvertation}>Convert</StyledButton>
);
}