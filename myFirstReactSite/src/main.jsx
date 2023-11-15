import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './nav.jsx'
import MainContent from './MainContent.jsx'
import Footer from './footer.jsx'
import './index.css'
import './nav.css'

/* const links = [
  "index.html", "Santa's Bio", "Gallery", 
  "Learn About Santa", "Book A Visit", "Santa's Schedule", "Facebook"
];
 */
const links = [
  
  {link: 'index.html', text: "Home", id: 1},
  {link: 'index.html', text: "Santa's Bio", id: 2},
  {link: 'index.html', text: "Gallery", id: 3},
  {link: 'index.html', text: "Learn About Santa", id: 4},
  {link: 'index.html', text: "Book A Visit", id: 5},
  {link: 'index.html', text: "Santa's Schedule", id: 6},
  {link: 'index.html', text: "Facebook", id: 7},
  
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav links={links} />
    <MainContent />
    <Footer />
  </React.StrictMode>,
)
