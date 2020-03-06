import React from "react"
import ReactDOM from "react-dom"
import "./Modal.css"

const Modal = props => {
	return ReactDOM.createPortal(
		<div
			className='modal'
			onClick={props.onDismiss}
			tabIndex='-1'
			role='dialog'
		>
			<div
				className='modal-dialog modal-dialog-centered'
				onClick={event => {
					event.stopPropagation()
				}}
				role='document'
			>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>{props.title}</h5>
						<button
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						<p>{props.content}</p>
					</div>
					<div className='modal-footer'>{props.actions}</div>
				</div>
			</div>
		</div>,
		document.querySelector("#modal")
	)
}

export default Modal
