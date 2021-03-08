import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ricola-logo.png'

function Nav({ active, onClick }) {

	return (
		<>
			<div className="logoContainer">
				<Link to="/">
					<img src={logo} alt="Logo" className="startLogo" />
				</Link>
			</div>
			<div className={active ? 'navMenuNotShowing' : 'navMenu'} >
				<ul>
					<Link to="/watch">
						<li>
							<span className="arrow">Watch</span>
						</li>
					</Link>
					<Link to="/sustainabilityMagazine">
						<li>
							<span className="arrow">Sustainability Magazine</span>
						</li>
					</Link>
					<Link to="/howWeWork">
						<li>
							<span className="arrow">How We Work</span>
						</li>
					</Link>
				</ul>
			</div>
			<button
				id="buttonGoBack"
				className={active ? 'button-showing' : 'button-not-showing'}
				onClick={() => onClick('0%')}
			>
				Back
			</button>
		</>
	)
}

export default Nav
