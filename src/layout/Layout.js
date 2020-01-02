import React from 'react';
import Routes from "../components/Routes";

import { AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemText} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.background.appBar
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3),
  },
}));


const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            DeanNelson.co.uk
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}/>
        <Divider />
        <List>
          {['Homepage', 'Projects', 'About Me', 'Contact Me'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes/>
      </main>

    </div>
  );
};

export default Layout;
