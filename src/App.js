import './css/App.css'
import React, { useState } from 'react'
import Start from './components/start.js'
import Nav from './components/nav.js'
import { motion } from 'framer-motion'
import ButtonHomePage from './components/buttonHomepage.js'

function App() {
	const [isActive, setIsActive] = useState(false)

	const [xActive, setXActive] = useState('')


	function handleClick(item) {
		setXActive(item)
		setIsActive(previsActive => !previsActive)
	}


	const variant = {
		active: {
			x: xActive,
			y: '-50%',
			scale: 2,
		},
		inactive: {
			x: 0,
			y: 0,
			scale: 1,
		},
	}

	return (
		<div>
			<Start />
			<motion.div
				className="startComponent"
				variants={variant}
				animate={isActive ? 'active' : 'inactive'}
				transition={transition}>

			</motion.div>

			<ButtonHomePage active={isActive} onClick={handleClick} />


			<div className={isActive ? 'naturediv' : 'naturedivNotShowing'}>
				<div className="natureBoxInfo" id="natureBox1">
					<h3>Biodiversity</h3>
					<p>
						Establish Ricola Biodiversity Principles (In Global Supply Chain)
						100% Of Swiss Herbs Come From Sustainable Agriculture Zero
						Pesticides
					</p>
				</div>
				{/* <div className="natureBoxInfo" id="natureBox2"></div>
				<div className="natureBoxInfo" id="natureBox3"></div>
				<div className="natureBoxInfo" id="natureBox4"></div> */}
			</div>

			<Nav />
		</div>
	)
}

const transition = {
	type: 'spring',
	stiffness: 200,
	damping: 100,
}

export default App
