import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";

export default function ComboBox(props) {

  const {label, onInputChange, inputValue, onChange, value} = props; 
  const cryptos = useSelector((state) => state.cryptos);
  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={cryptos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      onInputChange={onInputChange}
      inputValue={inputValue}
      onChange={onChange}
      value={value}
    />
  );
}
