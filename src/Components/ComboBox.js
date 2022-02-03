import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import  { useState } from 'react';

export default function ComboBox({cryptos, currentCoin}) { 
  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={cryptos}
      sx={{ width: 300, padding: 1.5, } }
      renderInput={(params) => <TextField {...params} label="Cryptos" />}
      onChange={currentCoin}
    />
  );
}