import React from 'react';
import Card from '../Card';

const Services = () => {
   
let array = [{
    title:'Be Productive',
description:'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.',
image :require("../../Assets/images/feature-icon-01.svg")
},


{
    title:'Be Productive',
description:'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.' ,
image :require("../../Assets/images/feature-icon-02.svg")},

{
    title:'Be Productive',
description:'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.' ,
image :require("../../Assets/images/feature-icon-03.svg")},

// {
//     title:'Be Productive',
// description:'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.',
// image :require("../../Assets/images/feature-icon-04.svg")
// },


// {
//     title:'Be Productive',
// description:'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.' ,
// image :require("../../Assets/images/feature-icon-05.svg")},

// {
//     title:'Be Productive',
// description:'Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.' ,
// image :require("../../Assets/images/feature-icon-06.svg")},


]


const mappedCard = array.map(( value ) => {

    return  <Card title = { value.title }
    description ={value.description}
    image = {value.image}/>
})
   
    return (
        <section class="features section">
            <div class="container">
                <div class="features-inner section-inner has-bottom-divider">
                    <div class="features-wrap">
                       {mappedCard}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Services;