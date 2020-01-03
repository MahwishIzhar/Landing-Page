import React from 'react';
import './App.css';
import Landingpage from './Components/LandingPage';
import {  connect } from 'react-redux';
import Dashboard from './Components/Dashboard';

const App = (props) => {
  console.log(props);
  return (
    // 
    
    <div className="App">
      {
      props.Reducer.check ?
     <Dashboard/> 
    :
     <Landingpage />
     
     }
     </div>
  
    // 
  );
}

const mapStateToProps  = (state) =>
{
  return state;
}

export default connect(mapStateToProps,null)(App);
