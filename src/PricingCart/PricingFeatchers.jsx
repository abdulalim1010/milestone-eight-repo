import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';

const PricingFeatchers = ({ feature }) => {
  
  return (
    <div className='bg-amber-50  p-4 mt-1 rounded text-xll'>
      <p className='flex gap-2'> <CiCircleCheck></CiCircleCheck>{ feature}</p>
    </div>
  );
};

export default PricingFeatchers;