import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2>Money Management App</h2>
      <ul>
        <li><NavLink to='/' activeClassName='is-active' exact='true'>Dash Board</NavLink></li>
        <li><NavLink to='/create' activeClassName='is-active'>Add</NavLink></li>
        <li><NavLink to='/help' activeClassName='is-active'>Help</NavLink></li>
      </ul>
    </div>
  )
}
export default Header;
