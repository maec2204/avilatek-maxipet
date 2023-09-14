import React from 'react';
import SocialsBar from './SocialsBar';
import SearchNav from './SearchNav';

function NavBar() {
  return (
    <nav className='sticky top-0'>
      <SocialsBar />
      <SearchNav />
    </nav>
  );
}

export default NavBar;
