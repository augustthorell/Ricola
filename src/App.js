import './css/App.css'
import React, { Component } from 'react'
import Start from './components/start.js'
import image from './assets/startBackground.jpg'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

/* function App() {
	return (
		<div className="App">
			<Start />
		</div>
	)
}

export default App */

export default class App extends Component {
	state = {
		type: true,
		limitToBounds: true,
		panningEnabled: true,
		transformEnabled: true,
		pinchEnabled: true,
		limitToWrapper: false,
		disabled: false,
		dbClickEnabled: true,
		lockAxisX: false,
		lockAxisY: true,
		velocityEqualToMove: true,
		enableWheel: false,
		enableTouchPadPinch: true,
		enableVelocity: true,
		limitsOnWheel: false,
		centerContent: false,
	}
	render() {
		const { lockAxisX, lockAxisY, enableWheel } = this.state
		return (
			<TransformWrapper
				defaultScale={1}
				defaultPositionX={100}
				defaultPositionY={100}
				pan={{
					lockAxisX: true,
					lockAxisY: true,
				}}
				wheel={{
					wheelEnabled: enableWheel,
				}}
			>
				{({
					positionX = 10,
					positionY = 5,
					zoomIn = positionX,
					zoomOut,
					resetTransform,
					...rest
				}) => (
					<React.Fragment>
						<div className="tools">
							<button onClick={zoomIn}>Nature</button>
							<button onClick={resetTransform}>x</button>
						</div>
						<TransformComponent>
							<img src={image} alt="test" style={{ width: '100vw' }} />
							<div>Example text</div>
						</TransformComponent>
					</React.Fragment>
				)}
			</TransformWrapper>
		)
	}
}
