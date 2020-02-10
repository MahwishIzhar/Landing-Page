import React from 'react';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Profile from '@material-ui/icons/AccountCircleOutlined';
import Help from '@material-ui/icons/HelpOutline';
import AboutUs from '@material-ui/icons/InfoOutlined';
import WorkOutline from '@material-ui/icons/WorkOutline';



class ListElements extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <List style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <ListItem button style={{ marginLeft: '-10' }} onClick={() => this.props.handleClick()}>
                    <ListItemIcon>
                        <HomeIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary={'Home Page'} style={{ color: 'white', fontSize: 8 }} />
                    {this.props.homeOPEN ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore style={{ color: 'white' }} />}
                </ListItem>
                {
                    <Collapse in={this.props.homeOPEN} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Divider />
                            {['Profile', 'View & Create Jobs', 'About Us', 'Help']
                                .map((text, index) => (
                                    <ListItem button key={text}
                                        className={this.props.nested} onClick={() => this.props.clickFunction(text)}>
                                        <ListItemIcon style={{ color: 'white' }}>
                                            {
                                                (index === 0) ? <Profile />
                                                    : (index === 1) ? <WorkOutline />
                                                        : (index === 2) ? <AboutUs />
                                                            : (index === 3) ? <Help />
                                                                : null
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary={text} style={{ color: 'white', fontSize: 8 }} />
                                    </ListItem>
                                ))}
                            <Divider />
                        </List>
                    </Collapse>
                }
            </List>
        );
    }
}

export default ListElements;