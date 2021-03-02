import React from 'react'
import '../css/App.css'
import logo from '../assets/ricola-logo.png'

function Start() {
	return (
		<div className="startComponent">
			<img src={logo} alt="Logo" className="startLogo" />
			<h1>
				Together. <br /> Step by Step. <br /> Leading a sustainable future.
			</h1>
		</div>
	)
}

export default Start
