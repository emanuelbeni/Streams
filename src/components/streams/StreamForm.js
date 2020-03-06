import React from "react"
import { Field, reduxForm } from "redux-form"

class StreamForm extends React.Component {
	renderInput = ({ input, label, meta }) => {
		const classNameInput = `form-control ${
			meta.error && meta.touched ? "is-invalid" : ""
		}`
		const classNameLabel = `${meta.error && meta.touched ? "text-danger" : ""}`

		return (
			<div className='form-group'>
				<label className={classNameLabel}>{label}</label>
				<input {...input} autoComplete='off' className={classNameInput} />
				{this.renderError(meta)}
			</div>
		)
	}

	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className='alert alert-danger mt-1'>
					<small className='text-danger'>{error}!</small>
				</div>
			)
		}
	}

	onSubmit = formValues => {
		this.props.onSubmit(formValues)
	}

	render() {
		return (
			<div className='container'>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field
						name='title'
						component={this.renderInput}
						label='Enter Title'
					/>
					<Field
						name='description'
						component={this.renderInput}
						label='Enter Description'
					/>
					<button className='btn btn-primary'>Submit</button>
				</form>
			</div>
		)
	}
}

const validate = formValues => {
	const errors = {}
	if (!formValues.title) {
		errors.title = "Enter a title"
	}
	if (!formValues.description) {
		errors.description = "Enter a description"
	}

	return errors
}

export default reduxForm({
	form: "streamForm",
	validate: validate
})(StreamForm)
