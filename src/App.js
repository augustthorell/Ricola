import './css/App.css'
import React, { useState } from 'react'
import Start from './components/start.js'
import { motion } from 'framer-motion'

function App() {
	const [isActive, setIsActive] = useState(false)

	const [xValueActive, setXValueActive] = useState()

	const yValue = '-50%'

	const variant = {
		active: {
			x: xValueActive,
			y: yValue,
			scale: 2,
		},
		inactive: {
			x: 0,
			y: 0,
			scale: 1,
		},
	}
	console.log(variant.active)
	return (
		<div>
			<Start />
			<motion.div
				className="startComponent"
				variants={variant}
				animate={isActive ? 'active' : 'inactive'}
				transition={transition}
			></motion.div>

			<button
				id="buttonNature"
				className={isActive ? 'button-not-showing' : 'button-showing'}
				onClick={() => {
					setIsActive(!isActive)
					setXValueActive('50%')
				}}
			>
				Nature
			</button>
			<button
				id="buttonBusiness"
				className={isActive ? 'button-not-showing' : 'button-showing'}
				onClick={() => {
					setIsActive(!isActive)
					setXValueActive('0%')
				}}
			>
				Business
			</button>
			<button
				id="buttonPeople"
				className={isActive ? 'button-not-showing' : 'button-showing'}
				onClick={() => {
					setIsActive(!isActive)
					setXValueActive('-50%')
				}}
			>
				People
			</button>
			<button
				id="buttonGoBack"
				className={isActive ? 'button-showing' : 'button-not-showing'}
				onClick={() => {
					setIsActive(false)
				}}
			>
				Back
			</button>
		</div>
	)
}

const transition = {
	type: 'spring',
	stiffness: 200,
	damping: 100,
}

export default App
