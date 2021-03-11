import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/nav.js'
import WatchContainer from '../components/watchContainer.js'

function Watch() {
	const variant = {
		x: 0,
		y: '50%',
		scale: 1,
	}
	return (
		<div className="watchBackground">
			<motion.div
				className="startComponent"
				animate={variant}
				transition={transition}
			/>
			<Nav />
			<WatchContainer />
		</div>
	)
}

const transition = {
	type: 'spring',
	stiffness: 200,
	damping: 100,
}

export default Watch
