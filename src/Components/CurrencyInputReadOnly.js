import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector } from "react-redux";
import Big from "big.js";

export default function CurrencyInputReadOnly() {
  const convertValue = useSelector((state) => state.convertValue);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-read-only-input"
          label="Get"
          InputProps={{
            readOnly: true,
          }}
          value={new Big(convertValue).toFixed(3)}
        />
         </Box>
  );
}