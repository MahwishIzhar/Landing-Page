import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Form from '../Form';
import ListElements from '../ListElements';
import AppbarTop from '../AppbarTop';
import HomePage from '../HomePage';
import NavbarDrawer from '../NavbarDrawer';

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

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    name: '',
    loaded: false,
    homeOPEN: false,
  };

  handleClick = () => {
    this.setState({ homeOPEN: !this.state.homeOPEN })
    this.setState({ name: '' });
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  onButtonClick = (name) => {
    this.setState({ name: name });
  }

  _renderDrawerContents = () => {
    const { classes } = this.props;

    return <div>
      <div className={classes.toolbar} />
      <Divider />
      <List style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <ListElements nested={classes.nested}
          clickFunction={this.onButtonClick}
          handleClick={this.handleClick}
          homeOPEN={this.state.homeOPEN} />
      </List>
      <Divider />
    </div>
  }

  _renderPageContent = () => {

    const { classes } = this.props;

    return <Form content={classes.content} toolbar={classes.toolbar}
      inputheight={classes.input} homeOPEN={this.state.homeOPEN}
      name={this.state.name}
      onsignout={this.props.onsignout} />
  }

  render() {
    const { classes } = this.props;
    return (
      (this.props.success === true)
        ?
        (
          <div className={classes.root}>
            <CssBaseline />
            <AppbarTop classes={this.props} onClickEvent={this.handleDrawerToggle} />
            <NavbarDrawer classes={this.props} Container={this.props.container} openState={this.state.mobileOpen} onCloseDrawer={this.handleDrawerToggle}
              renderDrawer={this._renderDrawerContents()} />
            {
              this.state.name !== ''
                ? <div>
                  {this._renderPageContent()}
                </div>
                :
                <HomePage classes={this.props} onClickEvent={this.props.onsignout} />
            }
            }
    </div>)
        : null
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
