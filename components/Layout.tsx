import React from 'react';
import NavBar from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col h-screen overflow-x-hidden'>
      <NavBar />
      <main className='flex-grow'>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
