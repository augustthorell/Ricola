import React from 'react'
import ReactPlayer from 'react-player'

export default function watchContainer() {
	return (
		<div className="watchContainer">
			<h2>Our Stories</h2>
			<div className="videoPlayer">
				<ReactPlayer
					className="react-player"
					controls
					url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					width="100%"
					height="100%"
					config={{
						youtube: {
							playerVars: { showinfo: 1 },
						},
					}}
				/>
			</div>
			<a href="https://www.youtube.com/user/RicolaInternational">
				<button className="youtubeButton button-styling">
					See more on our youtube chanel
				</button>
			</a>
		</div>
	)
}
