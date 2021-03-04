import React from 'react'
import NatureInformation from './natureInformation.js'
import BusinessInformation from './businessInformation.js'
import PeopleInformation from './peopleInformation.js'
import '../css/App.css'

function informationContainer({ active, xValue }) {
	console.log(xValue)
	return (
		<div className={active ? 'naturediv' : 'naturedivNotShowing'}>
			{(() => {
				if (xValue === '50%') {
					return <NatureInformation active={active} />
				} else if (xValue === '1%') {
					return <BusinessInformation active={active} />
				} else if (xValue === '-50%') {
					return <PeopleInformation active={active} />
				}
			})()}
		</div>
	)
}

export default informationContainer
