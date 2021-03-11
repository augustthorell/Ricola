import React from 'react'
import '../css/App.css'
import Nav from '../components/nav.js'
import image1 from '../assets/image-21.png'
import image2 from '../assets/image-22.png'
import image3 from '../assets/image-19.png'

function HowWeWork() {
	return (
		<div className="howWeWorkContainer">
			<Nav />
			<div className="howWeWorkContent">
				<h2>Our Current Work</h2>
				<section className="articleContainer">
					<div className="article">
						<h4>Bee Health</h4>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt.
						</p>

						<img src={image1} className="articleImg"></img>
					</div>
					<div className="article">
						<h4>Swiss herbs</h4>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
							aut fugit, sed quia consequuntur magni inventore veritatis
							etdolores eos qui ratione voluptatem sequi nesciunt.
							<br />
							<br />
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, magni dolores eos quitotam rem
							aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo.
						</p>

						<img src={image2} className="articleImg"></img>
					</div>
					<div className="article">
						<h4>Employee satisfaction</h4>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt.
						</p>

						<img src={image3} className="articleImg"></img>
					</div>
				</section>
			</div>
		</div>
	)
}

export default HowWeWork
