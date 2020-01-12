import React from 'react';
import Spinner from '../Spinner';
import { withRouter } from 'react-router'

const HomePage = (props) => {
  return (
    <main  style={{paddingTop:'20px'}}> 
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',marginTop:'50px' }}>
        <p onClick={()=>props.history.push('/dwork')}
          style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer', fontWeight: 200 }}>
            <strong>Sign Out</strong></p>
      </div>
      <div style={{ textAlign: 'center' }} > 
        
            <Spinner />
            <h5 style={{ color: 'black', fontWeight: 200 }}><strong> Welcome To Dwork </strong></h5>
       
      </div>
    </main>
  );
}

 
export default withRouter(HomePage);