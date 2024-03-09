import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FrontPage = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor={theme.palette.background.default}
      color={theme.palette.text.primary}
    >
      <Box textAlign="center">
        <Typography variant="h2">Just Another Quantum Key Reconciliation Application</Typography>
      </Box>
    </Box>
  );
};

export default FrontPage;
