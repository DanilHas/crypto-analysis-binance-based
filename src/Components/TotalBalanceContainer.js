import React from "react";
import styled from "styled-components";
import Balance from "../Components/Balance";

const BalanceContainer = styled.div`
border: 1px solid black;
height: 100px;
width: 350px;
margin: 15px;
display: flex;
align-items: center;
border-radius: 10px;
`;

export default function TotalBalanceContainer() {
    return (
        <BalanceContainer>
            <Balance />
        </BalanceContainer>
    );
}