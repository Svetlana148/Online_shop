


import React from 'react';
import { slide as Menu } from 'react-burger-menu';


class Example extends React.Component {


	render () {
		// NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
		return (
			<Menu>
			<a id="home" className="menu-item" href="/">Home</a>
			<a id="about" className="menu-item" href="/about">About</a>
			<a id="contact" className="menu-item" href="/contact">Contact</a>
			</Menu>
		);
	}
}
export default Example;