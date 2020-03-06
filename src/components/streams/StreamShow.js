import { fetchStream } from "../../actions"
import React, { Component } from "react"
import { connect } from "react-redux"

export class StreamShow extends Component {
	componentDidMount = () => {
		this.props.fetchStream(this.props.match.params.id)
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>
		}
		const { title, description } = this.props.stream
		return (
			<div className='container'>
				<h2>{title}</h2>
				<h5>{description}</h5>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
