
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

/****** Components *****/
import Start from './components/start.js'
import Nav from './components/nav.js'
import ButtonHomePage from './components/buttonHomepage.js'

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
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/watch" component={Watch} />
					<Route path="/HowWeWork" component={HowWeWork} />
					<Route path="/SustainabilityMagazine" component={SustainabilityMagazine} />

				</Switch>
			</div>
		</Router>
	);
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
			<Start />
			<motion.div
				className="startComponent"
				variants={variant}
				animate={isActive ? 'active' : 'inactive'}
				transition={transition}
			></motion.div>

			<ButtonHomePage active={isActive} onClick={handleClick} />

			<div className={isActive ? 'naturediv' : 'naturedivNotShowing'}>
				<div className="natureBoxInfo" id="natureBox1">
					<h3>Biodiversity</h3>
					<p>
						Establish Ricola Biodiversity Principles (In Global Supply Chain).
						<br />
						100% Of Swiss Herbs Come From Sustainable Agriculture.
						<br />
						Zero Pesticides
					</p>
				</div>
				<div className="natureBoxInfo" id="natureBox2">
					<h3>Waste</h3>
					<p>
						Reduce Waste In Production; Scope 1.
						<br />
						Conduct Input/Output Analysis In Distribution And Logistics.
						<br />
						Towards Fully Recyclable, Compostable Or Biodegradable; Scope 1, 2,
						3.
						<br />
						100% FSC Certification For The „Böxli“.
					</p>
				</div>
				<div className="natureBoxInfo" id="natureBox3">
					<h3>Water</h3>
					<p>Water Reduction In Ricola; Scope 1.</p>
				</div>
				<div className="natureBoxInfo" id="natureBox4">
					<h3>Energy & Emissions</h3>
					<p>
						-100% Emission Transparency; Scope 1, 2, 3.
						<br /> 100% Renewable Energy; Scope 1
					</p>
				</div>
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
