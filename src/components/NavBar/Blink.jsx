import React from 'react';

const Blink = ({route}) => {
  return (
    <div>
      <li className='mr-28 hover:bg-amber-900 hover:text-white'> <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Blink;