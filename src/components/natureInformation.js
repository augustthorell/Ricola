import React from 'react'

function NatureInformation({ active }) {
	return (
		<div className="natureContainer">
			<div className="boxInfo" id="natureBox1">
				<h3>Beyond Zero</h3>
				<p>
					Establish Ricola Biodiversity Principles (In Global Supply Chain). We
					not only want to reduce our emissions and our waste to zero but also
					add positive value to our shared environment in all aspects of our
					business.
				</p>
			</div>
			<div className="boxInfo" id="natureBox2">
				<h3>Water</h3>
				<p>
					Further reduce the water consumption in all Ricola buildings globally
					by raising awareness amongst employees and conducting trainings.
				</p>
			</div>
			<div className="boxInfo" id="natureBox3">
				<h3>Energy & Emissions:</h3>
				<p>
					Reach 100% emission transparency by getting a full understanding of
					Ricola’s carbon footprint and then taking informed measures to reduce
					the negative impact. Move towards 100% renewable energy in all offices
					worldwide by continuing and expanding the work with renewable energy
					in Switzerland to our global offices.
				</p>
			</div>
			<div className="boxInfo" id="natureBox4">
				<h3>Waste</h3>
				<p>
					Further reduce the waste in our production by building on our previous
					Efforts and trainings on waste reduction. Optimise distribution,
					logistics and the reduction of waste by conducting an input/output
					analysis in distribution and logitstics. Become a leader and role
					model in relation to the packaging of all our products by Ensuring
					that our products are fully recyclable, compostable or biodegradable
					Reach 100% FSC certification for our “Böxli”.
				</p>
			</div>
			<div className="boxInfo" id="natureBox5">
				<h3>Biodiversity</h3>
				<p>
					Establish Ricola biodiversity principles by understanding how we can
					apply our sourcing standards from Switzerland in our global supply
					chain. Ensure that 100% of Swiss herbs come from sustainable
					agriculture by continuing our state of the art work in herb sourcing
					in Switzerland. Head towards and beyond Zero pesticides in the
					production and full global supply chain by understanding what this
					entails.
				</p>
			</div>
		</div>
	)
}

export default NatureInformation
