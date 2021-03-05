import React from 'react'
import { Link } from 'react-router-dom'
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
					<Link to="/watch">
						<li>
							<span class="arrow">Watch</span>
						</li>
					</Link>
					<Link to="/sustainabilityMagazine">
						<li>
							<span class="arrow">Sustainability Magazine</span>
						</li>
					</Link>
					<Link to="/howWeWork">
						<li>
							<span class="arrow">How We Work</span>
						</li>
					</Link>
				</ul>
			</div>
		</>
	)
}

export default Nav
