import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import reduxThunk from "redux-thunk"
import StreamCreate from "./components/streams/StreamCreate"
import StreamEdit from "./components/streams/StreamEdit"
import StreamList from "./components/streams/StreamList"
import StreamShow from "./components/streams/StreamShow"
import StreamDelete from "./components/streams/StreamDelete"
import HeaderNav from "./components/HeaderNav"
import reducers from "./reducers"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import history from "./history"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
)

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Router history={history}>
					<div>
						<HeaderNav />
						<Switch>
							<Route path='/' exact component={StreamList} />
							<Route path='/streams/new' component={StreamCreate} />
							<Route path='/streams/edit/:id' component={StreamEdit} />
							<Route path='/streams/delete/:id' component={StreamDelete} />
							<Route path='/streams/:id' component={StreamShow} />
						</Switch>
					</div>
				</Router>
			</div>
		</Provider>
	)
}

export default App
