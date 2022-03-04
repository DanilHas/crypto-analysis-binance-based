import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

const StyledTypography = styled(Typography)`
display: flex;
justify-content: center;
`;

export default function Balance() {
    return (
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <StyledTypography variant="body1" gutterBottom>
          Your total balance is: 20000.00 (USDT)
        </StyledTypography>
      </Box>
    );
  }