import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    // Customize your theme here
  });
  
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
}));

const ResponsiveLayout = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" align="center" gutterBottom>
          Responsive Page
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* Content for the left side */}
            <Typography variant="body1" align="left">
              Left Content
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Content for the right side */}
            <Typography variant="body1" align="left">
              Right Content
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
    </ThemeProvider>
  );
};

export default ResponsiveLayout;
