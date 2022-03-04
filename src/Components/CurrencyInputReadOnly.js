import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CurrencyInputReadOnly() {
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
          defaultValue={0}
          InputProps={{
            readOnly: true,
          }}
        />
         </Box>
  );
}