import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

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

    render() {
        return (
            <main className={this.props.content}>
                {/* <div className={this.props.toolbar} /> */}
             
                        <div style={{display:'flex',flexDirection:'row',
                        alignItems:'baseline',justifyContent:'center', marginTop:'20px'}} >
                            <h3 style={{color: "black",fontWeight:300}}><strong>Home Page / </strong></h3>
                            <h6 style={{color: "black",fontWeight:400}}>{ this.props.name}</h6>
                        </div>
                  
          
            </main>
        );
    }
}
export default Form;
