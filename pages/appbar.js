import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
  },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.logo}>
          MicroLoan
        </Typography>
        <nav>
          <Button color="inherit">How It Works</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Apply for Loan</Button>
          <Button color="inherit">FAQ</Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
