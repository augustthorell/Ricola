import React from 'react'

function PeopleInformation({ active }) {
	return (
		<div className="peopleContainer">
			<div className="boxInfo" id="peopleBox1">
				<h3>Continuous Deep Care</h3>
				<p>
					We want to show continuous deep care by growing and enriching the
					lives of the people and communities we engage with, both as individual
					human beings and as a business, for generations to come.
				</p>
			</div>
			<div className="boxInfo" id="peopleBox2">
				<h3>Communities</h3>
				<p>
					Establish principles to work with farmer communities globally by
					standardising and expanding our pioneering eco-system approach to herb
					farming in Switzerland.
				</p>
			</div>
			<div className="boxInfo" id="peopleBox3">
				<h3>Employees</h3>
				<p>
					Continue the implementation of our “Lean” leitbild Conduct regular
					employee surveys by understanding and implementing state-of-the art
					employee surveys. Increase awareness for sustainability by creating a
					Ricola Sustainability Platform to deliver trainings and start
					conversations around sustainability.
				</p>
			</div>
			<div className="boxInfo" id="peopleBox4">
				<h3>Supply Chain</h3>
				<p>
					Be responsive to social impacts in our global supply chain by
					developing a monitoring and response system to continuously track,
					understand and improve impacts in our herb sourcing and global supply
					chain. Establish criteria for supplier selection to ensure fair
					working conditions and high social standards in all services and
					products in the value chain.
				</p>
			</div>
			<div className="boxInfo" id="peopleBox5">
				<h3>Partners</h3>
				<p>
					Establish criteria for contract manufacturers to ensure decent and
					fair working conditions, non-discrimination and fair wages everywhere.
				</p>
			</div>
			<div className="boxInfo" id="peopleBox6">
				<h3>Consumers</h3>
				<p>
					Understand consumer expectations in relation to sustainability by
					learning and understanding through consumer insights.
				</p>
			</div>
		</div>
	)
}

export default PeopleInformation
