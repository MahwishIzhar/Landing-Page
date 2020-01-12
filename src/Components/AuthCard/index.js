import React from 'react'
import './style.css'

class AuthCard extends React.Component {

    state = {
      toggle: false
    }


    _setToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        return (<div class="login-wrap">
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group">
                            <label for="user" class="label">Username</label>
                            <input id="user" type="text" class="input" onChange={(e) => this.props.onChangeLogin(e, 'login_email')} value={this.props.login_details.login_email} />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" class="input" data-type="password" onChange={(e) => this.props.onChangeLogin(e, 'login_password')} value={this.props.login_details.login_password} />
                        </div>
                        {/* <div class="group">
                        <input id="check" type="checkbox" class="check" checked/>
                        <label for="check"><span class="icon"></span> Keep me Signed in</label>
                    </div> */}
                        <div class="group">
                            <input type="submit" class="button" value="Sign In" onClick={this.props.onSignin} />
                        </div>
                        <div class="hr"></div>
                        {/* <div class="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                    </div> */}
                    </div>

                    <div class="sign-up-htm">
                        <div class="group">
                            <label for="user" class="label">Username</label>
                            <input id="user" type="text" class="input" onChange={(e) => this.props.onChangeSignup(e, 'signup_username')} value={this.props.signup_details.signup_username} />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" class="input" data-type="password" onChange={(e) => this.props.onChangeSignup(e, 'signup_password')} value={this.props.signup_details.signup_password} />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Repeat Password</label>
                            <input id="pass" type="password" class="input" data-type="password"
                                onChange={(e) => this.props.onChangeSignup(e, 'signup_repeatpassword')} value={this.props.signup_details.signup_repeatpassword} />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Email Address</label>
                            <input id="pass" type="text" class="input" onChange={(e) => this.props.onChangeSignup(e, 'signup_email')} value={this.props.signup_details.signup_email} />
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Sign Up" onClick={this.props.onSignup} />
                        </div>
                        <div class="hr"></div>
                        {/* <div class="foot-lnk">
                        <label for="tab-1"><a>Already Member?</a></label>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

export default AuthCard