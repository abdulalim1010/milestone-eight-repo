import React from 'react';
import { Features } from 'tailwindcss';
import PricingFeatchers from './PricingFeatchers';

const PricingCart = ({ pricing }) => {
  const {id,name,price,features}=pricing
  console.log(pricing)
  return (
   <div  className='border-2 bg-amber-300 gap-5 mr-4 border-amber-400 rounded-2xl p-4 m-4'> <div>
      <h1 className='text-4xl m-4 font-bold'>{id}</h1>
      <h1 className='text-4xl m-4 font-bold'>{name}</h1>
      <h1 className='text-4xl m-4 font-bold'>{price}</h1>

    </div>
      
      <div>
        <p className='bg-amber-50 p-4 rounded text-xll'>{pricing.description}</p>
        {
          features.map((feature,index)=><PricingFeatchers key={index} feature={feature}></PricingFeatchers>)
        }
      </div>
    </div>
    
  );
};

export default PricingCart;