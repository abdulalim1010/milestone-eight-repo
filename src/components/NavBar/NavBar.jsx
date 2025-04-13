import React from 'react';
import Blink from './Blink';




const navigationData = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "Profile", path: "/profile" },
  { id: 3, name: "Dashboard", path: "/dashboard" },
  { id: 4, name: "Settings", path: "/settings" },
  { id: 5, name: "Help", path: "/help" },
];

const NavBar = () => {
  return (
    <nav>
      <ul  className='flex'> {
        navigationData.map(route => (<Blink key={route.id} route={ route}></Blink> ))
       
};

      </ul>
    
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