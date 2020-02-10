import React, { Component } from 'react'
import './Styles.css'
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';

export default class ViewJobCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (<Paper elevation={3} className="Container" >
            <div className="RowContainer">
                <p><h6 className="textStyle">Category: </h6>{this.props.category}</p>
                <p><h6 className="textStyle">Budget: </h6>{this.props.budget}</p>
            </div>

            <div className="RowContainer">
                <p><h6 className="textStyle">Duration: </h6>{this.props.duration}</p>
                <p><h6 className="textStyle">Status: </h6>{this.props.status}</p>
            </div>

            <div className="descriptionContainer" >
                <h6 className="textStyle">Description: </h6>
                <p className="description">{this.props.description}</p> 
            </div>

            <div className="BtnContainer" >
                <p ><h6 className="textStyle">Posted by: </h6>{this.props.email}</p>
                <Button variant="contained" color="primary" >Apply</Button>
            </div>

        </Paper>
        )
    }
}