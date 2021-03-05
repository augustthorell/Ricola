import React from 'react'

function BusinessInformation({ active }) {
	return (
		<div className="businesssContainer">
			<div className="boxInfo" id="businessBox1">
				<h3>Regenerative Business</h3>
				<p>
					In the “Business” category, our sustainability goal reflects our
					closeness and connection to the natural world: we want to grow a
					resilient, regenerative and thriving global business by looking to
					nature for inspiration.{' '}
				</p>
			</div>
			<div className="boxInfo" id="businessBox2">
				<h3>Responsible Business Principles</h3>
				<p>
					Develop Ricola responsible business principles to ensure that all
					departments within Ricola follow basic sustainability guidelines and
					standards and provide guidance.
				</p>
			</div>
			<div className="boxInfo" id="businessBox3">
				<h3>Diversity, Equity and Inclusion</h3>
				<p>
					Further enhance diversity, equity and inclusion by analysing the
					current state of things and then taking the steps to push us towards a
					meritocracy. Continue and increase work with partners and suppliers
					with high diversity
				</p>
			</div>
			<div className="boxInfo" id="businessBox4">
				<h3>Nature-Inspired Innovation</h3>
				<p>
					Include sustainability in innovation by ensuring that sustainability
					principles and standards are introduces in the early stages of the
					innovation process.
				</p>
			</div>
		</div>
	)
}

export default BusinessInformation
