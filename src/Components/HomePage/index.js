import React from 'react';
import Spinner from '../Spinner';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    background: 'white',
    height: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,

    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,

    },

  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient( #50c878,#5FB5A7 )',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    display: 'block',
    justifyContent: 'flex-start',
    background: 'white',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const HomePage = (props) => {
  const { classes } = props;
  return (
    <main className={classes.content} >
      <div className={classes.toolbar} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <p onClick={props.onClickEvent}
          style={{ color: '#50C878', textDecoration: 'underline', cursor: 'pointer', fontWeight:'bold' }}>
        Sign Out </p>
      </div>
      <div style={{ textAlign: 'center' }} >
        <Typography paragraph>
          <div >
            <Spinner />
            <h5 style={{ color: '#50C878' }}> Welcome To Dwork !</h5>
          </div>
        </Typography>
      </div>
    </main>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(HomePage);