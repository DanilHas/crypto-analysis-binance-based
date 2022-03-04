import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function DescriptionTo() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="subtitle2" gutterBottom component="div">
        To
      </Typography>
    </Box>
  );
}