import React from 'react';
import {Typography} from '@material-ui/core'
import {Link as ReactRouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  centre: {
    top: '50%',
    left: '50%',
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
  },

  footer: {
    bottom: '0',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: 'Arial',
    marginTop: '10%',
    fontSize: '8px',
  },

  internalLink: {
    color: theme.palette.text.hyperlink,
    textDecoration: 'none',
  },

}));

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.centre}>
      <Typography variant={"h5"}>
        Error 404 Page Not Found
      </Typography>
      <br/>
      <ReactRouterLink className={classes.internalLink} to={"/"}>
        Back to Home Page
      </ReactRouterLink>
    </div>
  );
};

export default NotFoundPage;
