import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './nav.jsx'
import MainContent from './MainContent.jsx'
import Footer from './footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <MainContent />
    <Footer />
  </React.StrictMode>,
)
