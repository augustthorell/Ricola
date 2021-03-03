import React from 'react'
import '../css/App.css'
import logo from '../assets/ricola-logo.png'
// import { motion } from 'framer-motion'

function Start() {
	return (
		<div className="startText">
			<img src={logo} alt="Logo" className="startLogo" />
			<h1>
				Together. <br /> Step by Step by Step by Step by Step by Step by Step. <br /> Leading a sustainable future.
			</h1>
		</div>
	)
}

export default Start
