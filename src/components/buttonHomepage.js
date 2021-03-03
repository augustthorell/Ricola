import React from 'react'
import '../css/App.css'


function buttonHomepage({ active, onClick }) {
    return (
        <div>
            <button
                id="buttonNature"
                className={active ? 'button-not-showing' : 'button-showing'}
                onClick={() => onClick('50%')}
            >Nature
			</button>
            <button
                id="buttonBusiness"
                className={active ? 'button-not-showing' : 'button-showing'}
                onClick={() => onClick('0%')}
            >Business
			</button>
            <button
                id="buttonPeople"
                className={active ? 'button-not-showing' : 'button-showing'}
                onClick={() => onClick('-50%')}
            >People
			</button>
            <button
                id="buttonGoBack"
                className={active ? 'button-showing' : 'button-not-showing'}
                onClick={() => onClick('0%')}
            >Back
			</button>

        </div >
    )
}

export default buttonHomepage
