import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyApp from './myFirstComponent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h3>The state has been 'lifted up' to a parent function so that each button shares state. In other words, parent components can share state with children.</h3>
    <MyApp />
  </React.StrictMode>,
)
