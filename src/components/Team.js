import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const teamComp = [
  {
    avatar: <Avatar alt="Diogo Marto" src="/static/images/avatar/1.jpg" />,
    name: 'Diogo Marto',
    occupation: 'Developer',
    contact: 'diogo.marto@ua.pt',
    testimonial:
      "Responsible for developing a part of the system, including designing it to fit into the architecture",
  },
  {
    avatar: <Avatar alt="Tiago Pereira" src="/static/images/avatar/3.jpg" />,
    name: 'Tiago Pereira',
    occupation: 'Product Manager',
    contact: 'tfgp@ua.pt',
    testimonial:
      "Leads the planning of the project, coordinates interactions with the stakeholders, and keeps the project team focused on meeting the project objectives."
  },
  {
    avatar: <Avatar alt="Vitor Santos" src="/static/images/avatar/5.jpg" />,
    name: 'Vítor Santos',
    occupation: 'Architect',
    contact: 'vitor.mtsantos@ua.pt',
    testimonial:
      "Coordinates the technical design of the system and has overall responsibility for facilitating the major technical decisions expressed as software architecture.",
  },
  {
    avatar: <Avatar alt="Tiago Portugal" src="/static/images/avatar/4.jpg" />,
    name: 'Tiago Portugal',
    occupation: 'Tester',
    contact: 'tiago.portugal@ua.pt',
    testimonial:
      "Responsible for the core activities of the test effort. Those activities include identifying, defining, implementing, and conducting the necessary tests.",
  },
  {
    avatar: <Avatar alt="David Cobileac" src="/static/images/avatar/2.jpg" />,
    name: 'David Cobileac',
    occupation: 'Developer',
    contact: 'cobileacd@ua.pt',
    testimonial:
      "Responsible for developing a part of the system, unit-testing, and integrating the components that are part of the solution.",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Team() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="team"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Team 
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Meet our team. With a shared commitment to innovation, each member brings unique skills and perspectives to the table. Get to know the faces behind our application. 
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {teamComp.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Typography textAlign='right' variant="body2" color="text.secondary">
                {testimonial.contact}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
