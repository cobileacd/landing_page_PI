import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { useTheme } from '@mui/system';

const items = [
  {
    module: 'Communication',
    title: 'Task 1 (David Cobileac)',
    description:
      'Develop and manage projects website, reports, presentations and roles definition.',
  },
  {
    module: 'Communication',
    title: 'Task 2 (David Cobileac)',
    description:
      'Manage projects Git repository.',
  },
  {
    module: 'Communication',
    title: 'Task 3 (Tiago Pereira)',
    description:
      'Manage projects Jira page.',
  },
  {
    module: 'Communication',
    title: 'Task 4 (Tiago Pereira & Diogo Marto)',
    description:
      'Design and create the projects poster for presentations.',
  },
  {
    module: 'Research',
    title: 'Task 1 (Vítor Santos & Diogo Marto)',
    description:
      'Conduct a thorough review of literature and background information on quantum key reconciliation techniques.',
  },
  {
    module: 'Research',
    title: 'Task 2 (Vítor Santos & Tiago Pereira)',
    description:
      'Analyze the architecture of the systems done by IT.',
  },
  {
    module: 'Documentation',
    title: 'Task 1 (Team)',
    description:
      'Collaboratively write technical documentation detailing project specifications, requirements, and implementation guidelines.',
  },
  {
    module: 'Documentation',
    title: 'Task 2 (Diogo Marto & Vítor Santos)',
    description:
    'Write benchmark report',
  },
  {
    module: 'Documentation',
    title: 'Task 3 (David Cobileac)',
    description:
    'Create a demo video showcasing the project.',
  },
  {
    module: 'Documentation',
    title: 'Task 4 (Diogo Marto & Vítor Santos)',
    description:
    'Write a technical report.',
  },
  {
    module: 'Development',
    title: 'Task 1 (Diogo Marto & Tiago Pereira)',
    description:
    'Implement a QKD simulator capable of generating both binary and real outputs, and define a method for storing the raw generated data.',
  },
  {
    module: 'Development',
    title: 'Task 2 (Vítor Santos & David Cobileac)',
    description:
    'Define the reconciliation architecture and implement the basic functionality of the system.',
  },
  {
    module: 'Development',
    title: 'Task 3 (Vítor Santos & David Cobileac)',
    description:
    'Integrate the ETSI-QKD-004 standard on the reconciliation\'s end.',
  },
  {
    module: 'Development',
    title: 'Task 4 (David Cobileac)',
    description:
    'Make a libray out of the system.',
  },
  {
    module: 'Development',
    title: 'Task 5 (TBD)',
    description:
    'Benchmark.',
  },
  {
    module: 'Development',
    title: 'Task 6 (TBD)',
    description:
    'Lab testing.',
  },
];

const groupedItems = items.reduce((acc, item) => {
  if (!acc[item.module]) {
    acc[item.module] = [];
  }
  acc[item.module].push(item);
  return acc;
}, {});

export default function Tasks() {
  const theme = useTheme();

  return (
    <Container
      id="tasks"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
    >
      <Box
        sx={{
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
          <Typography component="h2" variant="h4">
            Tasks 
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Agenda of tasks scheduled for the project duration, each task being associated with specific members and categorized within modules.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {Object.entries(groupedItems).map(([module, moduleItems]) => (
            <Grid item xs={12} key={module}>
              <Typography variant="h6" gutterBottom>
                {module}
              </Typography>
              <Grid container spacing={2.5}>
                {moduleItems.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Stack
                      direction="column"
                      color="inherit"
                      component={Card}
                      spacing={1}
                      useFlexGap
                      sx={{
                        p: 3,
                        height: '100%',
                      }}
                    >
                      <div>
                        <Typography fontWeight="medium" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </div>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
