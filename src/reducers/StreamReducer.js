import _ from "lodash"
import {
	EDIT_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	DELETE_STREAM,
	CREATE_STREAM
} from "../actions/type"

export default (state = {}, action) => {
	switch (action.type) {
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload }
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload }
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload }
		case DELETE_STREAM:
			return _.omit(state, action.payload)
		case FETCH_STREAMS:
			//mapkeys return a big object, we need to seperate it
			return { ...state, ..._.mapKeys(action.payload, "id") }
		default:
			return state
	}
}
