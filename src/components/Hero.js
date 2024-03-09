import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
        theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
          : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <div>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'left',
              }}
            >
              Just another
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'left',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Quantum Key Reconciliation Application 
            </Typography>
          </div>
          <Typography variant="body1" textAlign="center" color="text.secondary">
              Facilitating the secure negotiation of cryptographic keys through Quantum Key Reconciliation, avoiding dependence on computational complexity for security.
          </Typography>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            Feel free to explore our project's repository&nbsp;
            <Link href="#" color="primary">
               here 
            </Link>
            .
          </Typography>

          <br/>
          <Divider/>
          <br/>

          <Typography variant="body1" color="text.secondary">
            Our goal is to develop an application with which given the right equipment two parties could exchange a symmetric key remotely and securely through the explotion of light quantum properties.
          </Typography>


          <Typography variant="body1"  color="text.secondary">
            We will be working under umbrella of Aveiro's University and it's parteners like Portuguese Quantum Communications Infrastructure (PTQCI) and Portuguese Telecommunications Institute (IT) iterating over an incomplete project on the same area. 
          </Typography>


          <Typography variant="body1"  color="text.secondary">
            While we will be developing this layer focused on the public channel we will be in contact with Aveiro's University teams working currently on the quantum channel protocols and their QKD devices, in a final phase of the project we hope to join both layers to make a complete system.
          </Typography>


        </Stack>
      </Container>
    </Box>
  );
}
