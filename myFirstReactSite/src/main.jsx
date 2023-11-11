import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './nav.jsx'
import MainContent from './MainContent.jsx'
import Footer from './footer.jsx'
import './index.css'

const links = [
  "Home", "Santa's Bio", "Gallery", 
  "Learn About Santa", "Book A Visit", "Santa's Schedule", "Facebook"
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav links={links} />
    <MainContent />
    <Footer />
  </React.StrictMode>,
)
