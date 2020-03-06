import React from "react"
import { connect } from "react-redux"
import { fetchStreams } from "../../actions"
import "./StreamList.css"
import { Link } from "react-router-dom"

class StreamList extends React.Component {
	componentDidMount = () => {
		this.props.fetchStreams()
	}

	renderList() {
		return this.props.streams.map(stream => {
			return (
				<React.Fragment key={stream.id}>
					<li className='list-group-item flex-column align-items-start'>
						<Link
							className='justify-content-between d-flex'
							to={`/streams/${stream.id}`}
						>
							{stream.title}
							<small>id: {stream.id}</small>
						</Link>

						<div>{stream.description}</div>
						{this.renderAdmin(stream)}
					</li>
				</React.Fragment>
			)
		})
	}

	renderAdmin = stream => {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className='buttons mt-2'>
					<Link to={`/streams/edit/${stream.id}`} className='btn btn-info mr-2'>
						Edit
					</Link>

					<Link
						to={`/streams/delete/${stream.id}`}
						type='button'
						className='btn btn-danger'
					>
						Delete
					</Link>
				</div>
			)
		}
	}

	renderCreateStream = () => {
		//Cases: userisLoggedIn - userisLoggedOut = 2 Cases
		if (this.props.isSignedIn) {
			return (
				<button type='button' className='btn btn-primary'>
					Create Stream
				</button>
			)
		}
	}

	render() {
		return (
			<div className='container mt-3'>
				<h1>Streams</h1>
				<ul className='list-group'>{this.renderList()}</ul>
				<div className='create-stream-button my-3'>
					<Link to='/streams/new'>{this.renderCreateStream()}</Link>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		//Take all values inside of the object and put it in an array
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	}
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)
