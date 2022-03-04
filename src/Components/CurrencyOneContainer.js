import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { INIT_CURRENCY_CLICK_TO_ENTER, INIT_CURRENT_CURRENCY } from "../store/actions";
import ComboBox from "./ComboBox";
import DescriptionFrom from "./From";

export const CurrencyContainer = styled.div`
display: flex;
flex-direction: column;
margin: 15px;
`;

export default function CurrencyOneContainer() {

  const dispatch = useDispatch();

  const getCurrentCurrency = (event, newInputValue) => {
    dispatch({
      type: INIT_CURRENT_CURRENCY,
      payload: newInputValue,
    });
  };

  const getCurrencyClickToEnter = (event, newValue) => {
    dispatch({
      type: INIT_CURRENCY_CLICK_TO_ENTER,
      payload: newValue,
    });
  };

  const currency = useSelector((state) => state.currency);

  const currencyClickToEnter = useSelector(
    (state) => state.currencyClickToEnter
  );

    return (
        <CurrencyContainer>
        <DescriptionFrom />
            <ComboBox
              label="Currency 1"
              onInputChange={getCurrentCurrency}
              inputValue={currency}
              onChange={getCurrencyClickToEnter}
              value={currencyClickToEnter}
            />
            </CurrencyContainer>
    );
}