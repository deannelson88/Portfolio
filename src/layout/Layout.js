import React from 'react';
import Grid from '@material-ui/core/Grid';
import Routes from "../components/Routes";

const Layout = () => {
  return (
    <Grid container>
      <Grid item>
        <Routes/>
      </Grid>
    </Grid>
  );
};

export default Layout;
