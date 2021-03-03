import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/ricola-logo.png'

function Nav() {
	return (
		<>
			<div className="logoContainer">
				<Link to="/">
					<img src={logo} alt="Logo" className="startLogo" />
				</Link>
			</div>
			<div className="navMenu">
				<ul>
					<Link to="/watch"><li>Watch</li></Link>
					<Link to="/sustainabilityMagazine"><li>Sustainability Magazine</li></Link>
					<Link to="/howWeWork"><li>How We Work</li></Link>
				</ul>
			</div>
		</>
	)
}

export default Nav
