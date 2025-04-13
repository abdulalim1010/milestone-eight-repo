import React, { useState } from 'react';
import Blink from './Blink';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";




const navigationData = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "Profile", path: "/profile" },
  { id: 3, name: "Dashboard", path: "/dashboard" },
  { id: 4, name: "Settings", path: "/settings" },
  { id: 5, name: "Help", path: "/help" },
];

const NavBar = () => {

  const [open, satOpen] = useState(false)
  const links=navigationData.map(route => (<Blink key={route.id} route={ route}></Blink> ))
  return (
    <nav className='flex justify-between mx-9'>
      {

      }
      <span className='flex ' onClick={() => satOpen(!open)}>
        {open ? 
<IoClose className='md:hidden' />:
          <IoMenu className='md:hidden' />}
        
        <ul className={`md:hidden absolute rounded-2xl  p-3 duration-1000
          ${open ? 'top-20' : '-top-40'}
          bg-amber-400 `}> {links}</ul>
        
      <h2 className='ml-4'>My nabar</h2></span>
      <ul  className=' md:flex hidden'>  {
        
    links   
};

      </ul>
      <button>sign in</button>
    
      {/* <ul className='flex'>
        {
          navigationData.map(item => <li className='mr-10'><a href="item.path">{item.name }</a></li>)
        }
      </ul> */}

      {/* <ul className='flex '>
   
         <li className='mr-10'>   <a href="/About">Blog</a></li>       
         <li className='mr-10'>  <a href="/About">About</a></li>        
         <li className='mr-10'>  <a href="/Contact">Contact</a></li>       



</ul> */}

    </nav>
  );
};

export default NavBar;