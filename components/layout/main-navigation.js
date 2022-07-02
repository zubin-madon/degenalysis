import React from 'react';
import Link from "next/link";
import { navLinks } from "../../data/navlinks";
import { useState } from "react";
import Login from './login';

function MainNavigation() {
    const [open, setOpen]=useState(true);
    return (
      <header>
           <nav className="flex align-middle items-center">
        {navLinks.map((link, index) => {
          return (
              <div className="pr-5 pl-5 text-xl">
            <ul className= {`${open ? 'flex-row':'hidden'}`}>
              <Link href={link.path}>
                <li className="text-white" key={index}>{link.name}</li>
              </Link>
            </ul>
            </div>
          )
        })}
        <Login /> 
      </nav>
      </header>
    )
  }

export default MainNavigation;