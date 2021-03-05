import React from 'react'
import '../css/App.css'


function Start({ active }) {

	return (
		<div className={active ? 'startTextnotShowing' : 'startText'}>
			<h1>
				Together. <br /> Step by Step. <br /> Leading a sustainable future.
			</h1>
		</div>
	)
}

export default Start
