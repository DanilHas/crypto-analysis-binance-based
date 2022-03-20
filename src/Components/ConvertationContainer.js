import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { INIT_CONVERT_VALUE } from "../store/actions";
import ConvertationButton from "./ConvertationButton";
import CurrencyInputNumber from "./CurrencyInputNumber";
import CurrencyInputReadOnly from "./CurrencyInputReadOnly";

export const ConvContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export default function ConvertaionContainer() {
    const numberValue = useSelector((state) => state.sendNumberValue);
    const currency = useSelector((state) => state.currency);
    const secondCurrency = useSelector((state) => state.secondCurrency);
    const cryptosPrice = useSelector((state) => state.cryptosPrice);
    const dispatch = useDispatch();

    const handleConvertation = (event) => {
        event.preventDefault();
        if (currency && secondCurrency !== '') {
        const currencyOnePrice = cryptosPrice.find((item) => item.symbol === currency).price;
        const currencyTwoPrice = cryptosPrice.find((item) => item.symbol === secondCurrency).price;
        const result = numberValue * currencyOnePrice / currencyTwoPrice;
        dispatch({
          type: INIT_CONVERT_VALUE,
          payload: result,
        });
        };
      };

    return (
        <ConvContainer>
            <CurrencyInputNumber handleConvertation={handleConvertation} />
        <ConvertationButton handleConvertation={handleConvertation} />
        <CurrencyInputReadOnly />
        </ConvContainer>
    );
}