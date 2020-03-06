import React from "react"
import "./GoogleAuth.css"
import { connect } from "react-redux"
import { signIn, signOut } from "../actions"

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"518347933887-5q63i8voki5rcnvdt74h05ipvni2nt5g.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance()
					this.onAuthChange(this.auth.isSignedIn.get())
					this.auth.isSignedIn.listen(this.onAuthChange)
				})
		})
	}

	//Handling change through redux
	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId())
		} else {
			this.props.signOut()
		}
	}

	onSignInClick = () => {
		this.auth.signIn()
	}

	onSignOutClick = () => {
		this.auth.signOut()
	}

	renderAuthButton = () => {
		if (this.props.isSignedIn === null) {
			return null
		} else if (this.props.isSignedIn) {
			return (
				<button className='btn btn-danger' onClick={this.onSignOutClick}>
					<i className='fab fa-google'></i> Logout
				</button>
			)
		} else {
			return (
				<button className='btn btn-danger' onClick={this.onSignInClick}>
					<i className='fab fa-google'></i> Login
				</button>
			)
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn }
}

const mapDispatchToProps = { signIn, signOut }

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth)
