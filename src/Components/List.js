import React from 'react';
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";


 function renderRow(props, cryptos, isLoaded, error) {
  const { index, style } = props;

  if (!cryptos || cryptos.length === 0)
    return <p>No items, sorry</p>;
    else if (!isLoaded)
    return <p>Loading...</p>;
    else if (error)
    return <p>Error: {error.message}</p>;
  
  return (
        <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${cryptos[index]}`} />
      </ListItemButton>
    </ListItem>
  );
 }
    

export default function VirtualizedList({cryptos, isLoaded, error}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={cryptos.length}
        overscanCount={5}
      >
        {(props) => renderRow(props, cryptos, isLoaded, error)}
      </FixedSizeList>
    </Box>
  );
}
