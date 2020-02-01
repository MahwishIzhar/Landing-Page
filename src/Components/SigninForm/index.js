import React from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import AuthCard from '../AuthCard'

class SigninForm extends React.Component {

  constructor() {

    super()
    this.state = {
      flag: false,
      accountlist : ['Freelancer','Employer'],

      login_details: {
        email: '',
        password: '',

      },

      signup_details: {
        firstName:'',
        lastName:'',
        email: '',
        userName:'',
        password: '',
        confirmPassword: '',
        accountType:''
        

      }
    }

    this.testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  }

  onChangeLogin = (event, field) => {
    let text = event.target.value
    this.setState(prevState => ({
      login_details: {
        ...prevState.login_details,
        [field]: text
      }
    }))
  }

  onChangeSignup = (event, field) => {

let text = ''

    if(field=='accountType')
     text = event
     else
     text = event.target.value

    this.setState(prevState => ({
      signup_details: {
        ...prevState.signup_details,
        [field]: text
      }
    }))
  }

  onLogin = () => {
    

    if (this.state.login_details.email.trim() == '')
    return  ToastsStore.error("Please fill out email field")


    if ( !this.testEmail.test(this.state.login_details.email))
      return ToastsStore.error('Please enter a valid email address')

    if (this.state.login_details.password.trim() == '')
      return ToastsStore.error('Please fill out password field')

    if (this.state.login_details.password.length < 8 )
      return ToastsStore.error('Password length should be 8 or greater')


    if ('admin@admin.com' === this.state.login_details.email && '12345678' === this.state.login_details.password) {

        this.props.history.push('/dwork/home')
      }
      else {
        return ToastsStore.error("UserName or Password doesn't match !")
   
      }
  }

  onSignup = () => {

    if(this.state.signup_details.firstName.trim() == '')
    return ToastsStore.error('Please fill out first name field')

    if(this.state.signup_details.lastName.trim() == '')
    return ToastsStore.error('Please fill out last name field')
  
    if (this.state.signup_details.email.trim() == '')
    return ToastsStore.error('Please fill out email field')

  if ( !this.testEmail.test(this.state.signup_details.email))
    return ToastsStore.error('Please enter a valid email address')

    if (this.state.signup_details.userName.trim() == '')
    return ToastsStore.error('Please fill out username field')

  if (this.state.signup_details.password.trim() == '')
    return ToastsStore.error('Please fill out password field')

  if (this.state.signup_details.password.length < 8 )
    return ToastsStore.error('Password length should be 8 or greater')

    if (this.state.signup_details.confirmPassword.trim() == '')
    return ToastsStore.error('Please fill out confirm password field')

  if (this.state.signup_details.confirmPassword != this.state.signup_details.password )
    return ToastsStore.error('Passwords do not match')

    if (this.state.signup_details.accountType.trim() == '')
    return ToastsStore.error('Please select an account type')

    let signupData = {
      firstName:this.state.signup_details.firstName,
      lastName:this.state.signup_details.lastName,
      email: this.state.signup_details.email,
      userName:this.state.signup_details.userName,
      password: this.state.signup_details.password,
      accountType:this.state.signup_details.accountType
      
    }

    console.log(signupData);
  
    this.props.history.push('/dwork/home')

  }

  _onSelect = (option) => {
    console.log('You selected ', option.label)
 this.onChangeSignup(option.label,'accountType')
    // this.setState({selected: option})
  }


  render() {
    return (
    <div style={{width:'100%',height:'100%'}}><AuthCard
      onLogin={this.onLogin} login_details={this.state.login_details}
      signup_details={this.state.signup_details} onSignup={this.onSignup} accountlist = {this.state.accountlist}
            onChangeLogin={this.onChangeLogin} onChangeSignup={this.onChangeSignup}  _onSelect = {this._onSelect}
    />
    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>

    </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return state
}
 
const mapDispatchToProps = ( dispatch ) => {

}

export default SigninForm;