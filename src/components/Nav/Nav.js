import React from 'react';
import css from './Nav.module.css';
import logo from '../../img/airbnb-logo.png';

const Nav = () => {
	return (
		<nav>
			<img className={css.navLogo} src={logo} alt="airbnb logo" />
		</nav>
	);
};

export default Nav;
