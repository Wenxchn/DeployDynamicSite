import React from 'react'
import { render } from 'react-dom'
import App from './src/components/App'

import { createStore} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'

const store = createStore(rootReducer)
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-root')
)
 
// ReactDOM.render(<App/>, document.getElementById('react-root'))
