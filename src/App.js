import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

/****** Components *****/
import Start from './components/start.js'
import Nav from './components/nav.js'
import ButtonHomePage from './components/buttonHomepage.js'
import InformationContainer from './components/informationContainer.js'

/****** CSS *****/
import './css/App.css'

/****** Pages ******/
import Watch from './pages/watch'
import HowWeWork from './pages/howWeWork'
import SustainabilityMagazine from './pages/sustainabilityMagazine'

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/watch" component={Watch} />
					<Route path="/HowWeWork" component={HowWeWork} />
					<Route path="/SustainabilityMagazine" component={SustainabilityMagazine}
					/>
				</Switch>
			</div>
		</Router>
	)
}

const Home = () => {
	const [isActive, setIsActive] = useState(false)

	const [xActive, setXActive] = useState('')

	function handleClick(item) {
		setXActive(item)
		setIsActive((previsActive) => !previsActive)
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

			<motion.div
				className="startComponent"
				variants={variant}
				animate={isActive ? 'active' : 'inactive'}
				transition={transition} />
			<Start active={isActive} />
			<ButtonHomePage active={isActive} onClick={handleClick} />
			<InformationContainer active={isActive} xValue={xActive} />
			<Nav active={isActive} onClick={handleClick} />
		</div>
	)
}

const transition = {
	type: 'spring',
	stiffness: 200,
	damping: 100,
}

export default App
