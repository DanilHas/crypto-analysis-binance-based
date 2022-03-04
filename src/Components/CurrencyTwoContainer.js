import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { INIT_SECOND_CURRENCY, INIT_SECOND_CURRENCY_CLICK_TO_ENTER } from "../store/actions";
import DescriptionTo from "./To";
import ComboBox from "./ComboBox";

const CurrencyContainer = styled.div`
display: flex;
flex-direction: column;
margin: 15px;
`;

export default function CurrencyTwoContainer() {
    const dispatch = useDispatch();
    const getSecondCurrency = (event, newInputValue) => {
        dispatch({
          type: INIT_SECOND_CURRENCY,
          payload: newInputValue,
        });
      };
    
      const getSecondCurrencyClickToEnter = (event, newValue) => {
        dispatch({
          type: INIT_SECOND_CURRENCY_CLICK_TO_ENTER,
          payload: newValue,
        });
      };

      const secondCurrency = useSelector((state) => state.secondCurrency);

      const secondCurrencyClickToEnter = useSelector(
        (state) => state.secondCurrencyClickToEnter
      );

    return (
        <CurrencyContainer>
            <DescriptionTo />
            <ComboBox
              label="Currency 2"
              onInputChange={getSecondCurrency}
              inputValue={secondCurrency}
              onChange={getSecondCurrencyClickToEnter}
              value={secondCurrencyClickToEnter}
            />
        </CurrencyContainer>
    );
}