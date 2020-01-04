import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import background from '../../Assets/images/background.PNG'

const styles = theme => ({
  main: {
    width: 'auto',

    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
      margin: '0 auto',

      paddingTop: '2%',
    },

  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    // background: 'linear-gradient( #50c878,#5FB5A7 )',
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,

  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const SigninForm = (props) =>
{

  // alert('here')
  const {classes} = props
    return(
      

               
					
        <main className={classes.main} >
              {/* <div style={{backgroundImage: `url(${background})`, position:'absolute',
              zIndex:'-1', width: '700px' , height:'400px'}}></div> */}
      
       <CssBaseline />
      
       
        <Paper className={classes.paper} >

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
             {/* onKeyPress={this.onkey}> */}
           <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">User Name</InputLabel>
              <Input id="name" name="name" autoComplete="name" required="true" autoFocus onChange={props.onEmailChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">password</InputLabel>

              <Input id="password" name="password" type="password" autoComplete="current-password" onChange={props.onPasswordChange} style={{ marginTop: '27px' }} />
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.onSubmit}>Sign in</Button>

            {
              (props.state === true)
                ? <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
                : null
            }
          </form>
        </Paper>

      </main>
      
    );
}

// export default SigninForm;

SigninForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SigninForm);