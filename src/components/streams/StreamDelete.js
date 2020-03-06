import React from "react"
import Modal from "../Modal"
import history from "../../history"
import { fetchStream, deleteStream } from "../../actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}

	renderAction = () => {
		const id = this.props.match.params.id

		return (
			<React.Fragment>
				<button
					onClick={() => {
						this.props.deleteStream(id)
					}}
					className='btn btn-primary'
				>
					Delete
				</button>
				<Link className='btn btn-secondary' to='/'>
					Close
				</Link>
			</React.Fragment>
		)
	}

	renderContent = () => {
		if (!this.props.stream) {
			return "Are you sure you want to delete this stream?"
		}

		return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
	}

	render() {
		return (
			<Modal
				title='Delete Stream'
				content={this.renderContent()}
				actions={this.renderAction()}
				onDismiss={() => {
					history.push("/")
				}}
			/>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id
	return {
		stream: state.streams[id]
	}
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
)
