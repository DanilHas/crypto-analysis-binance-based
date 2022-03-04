import React from "react";
import Button from '@mui/material/Button';
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledButton = styled(Button)`
height: 35px;
`;

export default function ConvertationButton() {
  const numberValue = useSelector((state) => state.sendNumberValue);
  const currency = useSelector((state) => state.currency);
  const secondCurrency = useSelector((state) => state.secondCurrency);

  const handleConvertation = () => {
    const result = currency
    console.log(result);
    return result;
  }

  return (
    <StyledButton variant="contained" onClick={handleConvertation}>Convert</StyledButton>
);
}