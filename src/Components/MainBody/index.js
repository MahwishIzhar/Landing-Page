import React from 'react';
import Title from '../Title';
import Services from '../Services';
import Pricing from '../Pricing';
// import Contact from '../Contact';


const MainBody = () => {
    return (
        <main>
            <Title title="Dwork"
                description=""
                buttonText="get started" />

            <Services />
            <Pricing />
            {/* <Contact text = "Still not convinced on buying?"
            buttonText = "Get in touch"/> */}
        </main>
    );
}
export default MainBody;