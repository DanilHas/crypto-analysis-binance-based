import styled from "styled-components";
import ConvertationButton from "./ConvertationButton";
import CurrencyInputNumber from "./CurrencyInputNumber";
import CurrencyInputReadOnly from "./CurrencyInputReadOnly";

export const ConvContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export default function ConvertaionContainer() {
    return (
        <ConvContainer>
            <CurrencyInputNumber />
        <ConvertationButton />
        <CurrencyInputReadOnly />
        </ConvContainer>
    );
}