import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import { CardContent } from '@mui/material';

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Project Context Evaluation',
    description:
    'Study the area where your project will take place, and do risk assessement.',

    goals: [
      {
        goal_title: 'Study concepts',
        goal_description: 'Gather the necessary knowledge that we will need to the development of such application.',
      },
      {
        goal_title: 'Understand the existing codebase',
        goal_description: 'Check libraries and implemented code from mother project.',
      },
      {
        goal_title: 'Analise existing projects',
        goal_description: 'Take notes and check how to improve onto existing projects.',
      },
    ],

    deadline:'05/03/2024',
    status:'on-going',
    
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },


  {
    icon: <DesignServicesIcon />,
    title: 'Design',
    description:
    'Design architecture, interfaces, and choose frameworks.',

    goals: [
      {
        goal_title: 'Write down initial requirements',
        goal_description: 'Study use major cases and establish it\'s requirements.',
      },
      {
        goal_title: 'Come up with an architecture and interface',
        goal_description: 'Based on the established requirements build upon the existing architecture and define a consistent interface.',
      },

      {
        goal_title: 'Set frameworks',
        goal_description: 'Choose frameworks and libraries to achieve the designed architecture.',
      },
    ],

    deadline:'28/03/2024',
    status:'Yet to be started',
    
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EngineeringIcon />,
    title: 'MVP development',
    description:
    'With the use cases, architecture, frameworks and libraries set, here will work to implement a proof of concept and built it to a MVP to present to our stakeholders.',

    goals: [
      {
        goal_title: 'Balance work-load through the team',
        goal_description: 'Atribute use cases,requirements and modules to team members to develop in parallel',
      },
      {
        goal_title: 'Polish product design',
        goal_description: 'Fix architecture, choose different framework and adapt interfaces if inconsistencies found during development',
      },

      {
        goal_title: 'Document new and old',
        goal_description: 'Write down documentation on existing modules of the codebase and those who we create.',
      },


      {
        goal_title: 'Present minimal viable product',
        goal_description: 'Present work done to stakeholders.',
      },


    ],

    deadline:'16/04/2024',
    status:'Yet to be started',
    
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: < TroubleshootIcon />,
    title: 'Polish and lab test MVP',
    description:
    'Test the MVP with other teams on the lab and polish hard edges.',


    goals: [
      {
        goal_title: 'Benchmark solution',
        goal_description: 'Put MVP through a series of real secenarios and test it\' performance.',
      },
      {
        goal_title: 'Soften hard edges',
        goal_description: 'Fix bugs and patch vunerabilities found by us or the others teams',
      },

      {
        goal_title: 'Publish documentation',
        goal_description: 'Finish writing documentation, and plug it in the project website.',
      },


      {
        goal_title: 'Present final version of MVP',
        goal_description: 'Present work done to public.',
      },


    ],


    deadline:'~04/05/2024',
    status:'Yet to be started',

    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
},
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Project plan 
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Here is a brief overview of the key objectives of our 
              application. The detailed and updated calendar can be seen <Link href="https://calendar.google.com/calendar/u/0?cid=YW50c2xvcHB5a2lzc2VyQGdtYWlsLmNvbQ">here</Link>.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box

              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              padding={3}

              sx={{
                m: 'auto',
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            >
              <Typography variant="body1" color="text.secondary">
                {items[selectedItemIndex].description}
                <ul style={{ listStyleType: 'none'}}>
                  {items[selectedItemIndex].goals.map((goal, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <strong>{goal.goal_title}:</strong><br />
                      {goal.goal_description}
                    </li>

                  ))}
                </ul>

                <strong style={{ color: 'af3f3b' }}>Deadline:</strong> {items[selectedItemIndex].deadline}<br />
                <strong style={{ color: 'green' }}>Status:</strong> {items[selectedItemIndex].status}
              </Typography>


            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
