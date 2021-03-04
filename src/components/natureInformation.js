import React from 'react'

function NatureInformation({ active }) {
	return (
		<div>
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
					Towards Fully Recyclable, Compostable Or Biodegradable; Scope 1, 2, 3.
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
	)
}

export default NatureInformation
