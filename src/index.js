import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Styletron from 'styletron-client'
import { StyletronProvider } from 'styletron-react'

const styleSheet = document.createElement('style')
document.head.appendChild(styleSheet)
const styletron = new Styletron([styleSheet])

import store, { history } from './store'

import App from 'containers/App'
import Landing from 'containers/Landing'

import 'normalize.css'

// const render = (Component) =>
//   ReactDOM.render(
//     <Provider store={store}>
//       <StyletronProvider styletron={styletron}>
//         <Component />
//       </StyletronProvider>
//     </Provider>,
//     document.getElementById('root')
//   )

render(
  <Provider store={store}>
    <StyletronProvider styletron={styletron}>
      <ConnectedRouter history={history}>
        <App>
          <Route exact path="/" component={Landing} />
          <Route exact path="/landing" component={Landing} />
        </App>
      </ConnectedRouter>
    </StyletronProvider>
  </Provider>,
  document.getElementById('root')
)

// render(App)
if (module.hot) module.hot.accept('containers/App', () => render(App))
