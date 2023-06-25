import React from 'react';
import './Nav.scss';

import { Link } from 'react-router-dom';

import Logo from '../../assets/logo1.svg';
import Search from '../../assets/search.svg';
import Account from '../../assets/account.svg';
import Bag from '../../assets/bag.svg';

export default function Nav() {
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <img src={Logo} />
        <h4>plantPeace</h4>
      </div>

      <ul className='nav__middleBlock'>
        <li><Link to='#'>Home</Link></li>
        <li><Link to='#'>Product</Link></li>
        <li><Link to='#'>About us</Link></li>
        <li><Link to='#'>Contact</Link></li>
        <li><Link to='#'>Blog</Link></li>
      </ul>

      <div className='nav__lastBlock'>
        <img src={Bag} />
        <img src={Search} />
        <img src={Account} />
      </div>
    </nav>
  );
}
