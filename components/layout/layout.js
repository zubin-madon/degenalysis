import React from 'react'
import { Fragment } from 'react';
import Logo from './logo';
import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <span className='flex justify-between bg-black'>
      <Logo />
      <MainNavigation />
      </span>
      <main>{props.children}</main>
      
    </Fragment>
  )
}

export default Layout;