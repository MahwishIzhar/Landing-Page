import React from 'react';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import background from '../../Assets/images/background.PNG'
import AuthCard from '../AuthCard'

class SigninForm extends React.Component
{

  constructor()
  {

super()
this.state = {
  login_details: {
    login_email: '',
    login_password: '',  
  },
  
  signup_details: {
    signup_username: '',
    signup_password: '',
    signup_repeatpassword: '',
    signup_email: '',
  }

}
  }

  onChangeLogin = ( event, field ) => {
let text = event.target.value
    this.setState( prevState => ({
      login_details: {
        ...prevState.login_details,
        [field]: text
      }
    }))
  }
 
  onChangeSignup = ( event, field ) => {

    let text = event.target.value
    console.log(text,field)
        this.setState( prevState => ({
          signup_details: {
            ...prevState.signup_details,
            [field]: text
          }
        }))
      }
 
onSignin = () =>
{


  if ('admin' === this.state.login_details.login_email && '123' === this.state.login_details.login_password) {

    this.props.history.push('/dwork/home')
    //this.setState({ success: true });
  }
  else {
    ToastsStore.error("UserName or Password doesn't match !");
    // this.setState({ failed: true });
  }
}

onSignup = () =>
{
if(!(this.state.signup_details.signup_username == '' && this.state.signup_details.signup_password == '' 
&& this.state.signup_details.signup_repeatpassword == '' && this.state.signup_details.signup_email == '')){

  if(this.state.signup_details.signup_password.localeCompare(this.state.signup_details.signup_repeatpassword) == 0 
  && this.state.signup_details.signup_email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
this.props.history.push('./dwork/home')
  }
  else {
    alert('enter correct password and email');
  }

} 
else {
  alert('fill all fields');
}

}



  render()

  { 
    return(<AuthCard 
      onSignin = {this.onSignin} login_details = { this.state.login_details } 
      signup_details = { this.state.signup_details} onSignup = {this.onSignup}
      onChangeLogin = {this.onChangeLogin} onChangeSignup = {this.onChangeSignup}
      />  
    
  );
  }   
}
export default SigninForm;