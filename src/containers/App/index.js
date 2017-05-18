import React from 'react';
import { Link } from 'react-router-dom'

import { styled } from 'styletron-react'

export const Header = styled('header', (props) => ({
  backgroundColor: 'papayawhip',
  color: 'palevioletred'
}))

const App = ({ children }) => (
  <div>
    <Header>
      <Link to="/">Home</Link>
      <Link to="/landing">Landing</Link>
    </Header>

    <main>
      {children}
    </main>
  </div>
)

export default App
