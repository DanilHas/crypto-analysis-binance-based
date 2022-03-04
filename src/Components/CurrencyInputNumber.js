import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { INIT_SEND_NUMBER_VALUE } from "../store/actions";

export default function CurrencyInputNumber() {
  const dispatch = useDispatch();

  const getNumberValue = (event) => {
    dispatch({
      type: INIT_SEND_NUMBER_VALUE,
      payload: event.target.value,
    });
  };

  const numberValue = useSelector((state) => state.sendNumberValue);

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
          id="outlined-number"
          label="Send"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='Number'
          onChange={getNumberValue}
          value={numberValue}
        />
      </Box>
  );
}