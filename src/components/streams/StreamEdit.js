import React from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { editStream, fetchStream } from "../../actions"
import StreamForm from "./StreamForm"

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}

	//!!!!!!!After user submit EDIT, userID is not included therefore
	// The stream does not belong to the user
	//Fix this error !!!
	onSubmit = formValues => {
		this.props.editStream(this.props.match.params.id, formValues)
	}

	render = () => {
		if (!this.props.stream) {
			return <div>Loading...</div>
		}
		return (
			<div className='container'>
				<h3>Stream Edit</h3>
				<StreamForm
					onSubmit={this.onSubmit}
					initialValues={_.pick(this.props.stream, "title", "description")}
				></StreamForm>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id
	return { stream: state.streams[id], auth: state.auth }
}

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit)
