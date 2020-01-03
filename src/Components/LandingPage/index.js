import React from 'react';
import './style.css';
import Logo from '../../Assets/images/logo.svg';

import HeaderImage from '../HeaderImage';
import MainBody from '../MainBody';
import Footer from'../Footer';

const Landingpage = () => {

    return (

        <body class="is-boxed has-animations" >
            <div class="body-wrap" >
                <HeaderImage source = {Logo}/>
                <MainBody/>
                <Footer image = {Logo} alter = "Logo" copyright = "2019 Solid, all rights reserved"/>
            </div>
        </body>

    );
}

export default  Landingpage;