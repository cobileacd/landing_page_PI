import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import GithubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Copyright />
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/cobileacd/PI_Website"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.ua.pt"
            aria-label="UA"
            sx={{ alignSelf: 'center' }}
          >
            <WebIcon/>
          </IconButton>
          <IconButton
            color="inherit"
            href="https://ptqci.av.it.pt/"
            aria-label="PTQCI"
            sx={{ alignSelf: 'center' }}
          >
            <SettingsInputCompositeIcon/>
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.it.pt/ITSites/Index/3"
            aria-label="IT"
            sx={{ alignSelf: 'center' }}
          >
            <ArchitectureIcon/>
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
