import React from 'react';
import Title from '../Title';
import Services from '../Services';
import Pricing from '../Pricing';
import Contact from '../Contact';


const MainBody = () => {
    return (
        <main>
            <Title title="Landing template for startups"
                description="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
                buttonText="get started" />

            <Services />
            <Pricing />
            <Contact text = "Still not convinced on buying?"
            buttonText = "Get in touch"/>
        </main>
    );
}
export default MainBody;