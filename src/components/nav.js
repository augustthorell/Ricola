import React from 'react'
import { Link } from 'react-router-dom';
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
					<Link to="/watch"><li>Watch</li></Link>
					<br />
					<Link to="/sustainabilityMagazine"><li>Sustainability Magazine</li></Link>
					<br />
					<Link to="/howWeWork"><li>How We Work</li></Link>
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
