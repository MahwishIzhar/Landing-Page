import React from 'react'
import './style.css'
import { Container, Row, Col } from 'react-grid-system';


class AuthCard extends React.Component {

    state = {
        toggle: true
    }

    _setToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    _handleKeyDown = (e, field) => {
        if (e.key === 'Enter') {
          if( field == 'signin' )
            {
                this.props.onLogin()
            }
          if( field == 'signup' ){
              this.props.onSignup()
          }
        }
      }

    _renderSignUp = () => {
        return <div className='window animated slideInDown' >
            <div className='content'>
                <div className='welcome'>Hello There!</div>
                <div className='subtitle'>To get started, please sign-up on Dwork </div>
                <div className='input-fields'>
                    <input type='email' placeholder='Email' className='input-line full-width'
                     value = { this.props.signup_details.email } onChange={(e)=>this.props.onChangeSignup(e,'email')} ></input>
                    <input type='password' placeholder='Password' className='input-line full-width' 
                    value = { this.props.signup_details.password } onChange={(e)=>this.props.onChangeSignup(e,'password')}></input>
                    <input type='password' placeholder='Confirm password' className='input-line full-width' 
                    value = { this.props.signup_details.confirmPassword } onChange={(e)=>this.props.onChangeSignup(e,'confirmPassword')}
                    onKeyDown={(e)=>this._handleKeyDown(e,'signup')}></input>
                </div>

                <button className='ghost-round full-width' onClick={()=>this.props.onSignup()}>Sign up</button>
                <div className='subtitle'>Already a member?</div>
                <button className='ghost-round full-width' onClick={() => this._setToggle()}>Sign in</button>
            </div>
        </div>
    }

    _renderSignIn = () => {
        return <div className='window animated fadeInDown' style={{ height: '450px' }}>
            <div className='content' >
            <div className='welcome'>Hello There!</div>
            <div className='subtitle'>Welcome back on Dwork </div>
            <div className='input-fields'>
                <input type='email' placeholder='Email' className='input-line full-width' 
                value={this.props.login_details.email} onChange={(e) => this.props.onChangeLogin(e,'email')} ></input>
                <input type='password' placeholder='Password' className='input-line full-width'
                  value={this.props.login_details.password} onChange={(e) => this.props.onChangeLogin(e,'password')}
                  onKeyDown={(e)=>this._handleKeyDown(e,'signin')}
                  ></input>

            </div>
            <button className='ghost-round full-width' onClick={()=>this.props.onLogin()}>Sign in</button>
            <div className='subtitle'>Don't have an account?</div>
            <button className='ghost-round full-width' onClick={() => this._setToggle()} >Create Account</button>
        </div>
        </div>
    }

    render() {
        return (
<Container fluid style={{height:'100%'}} >
    <Row style={{height:'100%',backgroundColor:'#1d2026'}} fluid>
        <Col lg={3} sm={3} md={3}></Col>

        <Col lg={6} sm={6} md={6}>
        <div className='container1'>

{
    this.state.toggle
        ? this._renderSignIn()
        : this._renderSignUp()
}

</div>
        </Col>

        <Col lg={3} sm={3} md={3}></Col>
    </Row>
            
            </Container>
        );
    }

}

export default AuthCard