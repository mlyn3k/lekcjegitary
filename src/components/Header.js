import React from 'react';
import Logo from '../assets/lgologowhite.svg';

const Header = () => {
  return (
  <header className='py-8'>
  <div className='container mx-auto'>
  <div className='flex justify-between items-center'>
    <a href='#'>
      <img src={Logo} className='h-[100px]' alt='logo'/>
    </a>
    <button className='btn btn-sm'>Zapisz się</button>
  </div>
  </div>
  </header>
  );
};

export default Header;
