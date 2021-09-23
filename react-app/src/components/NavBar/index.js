
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)


  return (
    <nav className='navbar-container'>
        <div className='logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className='nav-logo' src='logos/reddit_logo.png' alt='logo not found'/>
            <img className='nav-logo' src='logos/words_logo.png' alt='logo not found' />
            <img className='nav-logo' src='logos/twitter_logo.png' alt='logo not found' />
          </NavLink>
        </div>
        <div className='search-bar'>
          <input placeholder='Search'></input>
        </div>
        <div>
          <div className='nav-popular'>
            <NavLink to='/popular' exact={true} activeClassName='active'>
              Popular
            </NavLink>
          </div>
          <div className='nav-create-post'>
            <NavLink to='/posts/new' exact={true} activeClassName='active'>
              Create Post
            </NavLink>
          </div>
        </div>
      {user ? '' : 
        <div className='nav-login'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
            </NavLink>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>}
      {user ? 
        <div className='nav-logout'>
          <LogoutButton />
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> 
      : ''}

    </nav>
  );
}

export default NavBar;
