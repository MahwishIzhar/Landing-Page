import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Profile from '../Profile';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    handleClick = state => () => {
        this.setState({ open: true, ...state });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    _renderContent = () => {
        
        if(  this.props.name == 'Profile' )
            return <Profile />
    }

    render() {
        return (
            <main style={{paddingTop: '20px'}}  > 
             
                        <div style={{display:'flex',flexDirection:'row',
                        alignItems:'baseline',justifyContent:'center', marginTop:'20px'}} >
                            <h3 style={{color: "black",fontWeight:300}}><strong>Home Page / </strong></h3>
                            <h6 style={{color: "black",fontWeight:400}}>{ this.props.name}</h6>
                        </div>
                  
                        {
                            this._renderContent()
                        }

            </main>
        );
    }
}
export default Form;
