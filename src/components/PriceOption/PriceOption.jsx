import React, { use } from 'react';
import PricingCart from '../../PricingCart/PricingCart';

const PriceOption = ({pricingPromis}) => {
  const pricingData = use(pricingPromis)
  console.log(pricingData)
  return (
    <div>
      <h1 className='text-5xl'>Get Our membership</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2'>
        {
          pricingData.map(pricing=><PricingCart key={pricing.id} pricing={pricing}></PricingCart>)
        }
      </div>

    </div>
  );
};

export default PriceOption;