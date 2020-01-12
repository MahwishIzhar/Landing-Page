import React from 'react';
import './App.css';
import './Animate.css'
import Landingpage from './Components/LandingPage';
import { connect } from 'react-redux';
import { Route, Link, HashRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import SigninForm from './Components/SigninForm';
import ResponsiveDrawer from './Components/ResponsiveDrawer';





const Routing = () => {

  return (<Router basename="/" >
    <Switch>
      <Route exact path="/" component={Landingpage} />
      <Route exact path="/dwork" component={Landingpage} />

      <Dashboard>
        <Route component={({ match }) => {
          return <div style={{height:'100%',width:'100%'}}>
            <Route exact path="/dwork/signin" component={SigninForm} />
            <Route exact path="/dwork/home" component={ResponsiveDrawer}
            // render={(props) => <ResponsiveDrawer {...props} isAuthed={true} />}
            />

          </div>
        }} />

      </Dashboard>
    </Switch>
  </Router>);
}


export default Routing;