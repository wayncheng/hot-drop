
import { createStore, applyMiddleware, compose } from 'redux'
// import { browserHistory } from 'react-router'
import { 
	routerMiddleware,
	// syncHistoryWithStore, 
	// routerReducer,
	// push,
} from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
// import { composeWithDevTools } from 'redux-devtools-extension'
export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]


// Redux Dev Tool -------------------
if (process.env.NODE_ENV !== 'production') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;

// Create an enhanced history that syncs navigation events with the store
// export const syncedHistory = syncHistoryWithStore(history, store)
