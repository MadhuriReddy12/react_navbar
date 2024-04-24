// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	NavLogo
} from "./navbarElements";

import logo from "./experian-logo.png";//logo
const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />
				<img src={logo} alt="Logo" />
				<NavMenu>
					<NavLink to="/about" >
						About
					</NavLink>
					
					<NavLink to="/annual" activeStyle>
						Annual Report
					</NavLink>
					
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				
			</Nav>
		</>
	);
};

export default Navbar;
