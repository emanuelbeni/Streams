import React from "react"
import { Link } from "react-router-dom"
import GoogleAuth from "./GoogleAuth"

function HeaderNav() {
	return (
		<div>
			<nav className='navbar navbar-expand-lg bg-light navbar-light'>
				<Link to='/' className='nav-link'>
					Streamer
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
						<li className='navbar-item'>
							<Link to='/' className='nav-link'>
								Streams
							</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/' className='nav-link'>
								<GoogleAuth></GoogleAuth>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default HeaderNav
