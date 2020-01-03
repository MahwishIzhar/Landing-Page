import React from 'react';
import PricingHeading from '../PricingHeading';
import PricingButton from '../PricingButton';
import PricingCard from '../PricingCard';

const Pricing = () =>
{

return(

    <section class="pricing section">
    <div class="container-sm">
        <div class="pricing-inner section-inner">
            <PricingHeading title = "Unlimited for all"  
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud."/>
            
            <div class="pricing-tables-wrap">
                <div class="pricing-table">
                    <div class="pricing-table-inner is-revealing">
                        <PricingCard sign = "$" money = "49" month = "/month" description = "What you will get" />
                        <PricingButton title = "Pre order now"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


);

}

export default Pricing;