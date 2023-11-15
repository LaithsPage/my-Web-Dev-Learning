/* 

Some header text, then some nav links (can the nav be reused here?), then some copyright stuff

<footer>

<h3>text</h3>

<ul> links here </ul>

<p> copy right info </p>

</footer>

*/
import Nav from './nav.jsx'
const links = [
  
    {link: 'index.html', text: "Home"},
    {link: 'index.html', text: "Santa's Bio"},
    {link: 'index.html', text: "Gallery"},
    {link: 'index.html', text: "Learn About Santa"},
    {link: 'index.html', text: "Book A Visit"},
    {link: 'index.html', text: "Santa's Schedule"},
    {link: 'index.html', text: "Facebook"},
    
  ]

export default function Footer() {
    return (
        <div>
            <footer>
                <h3>Text</h3>
                <ul>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <Nav links={links}/>
                <p>Copyright&copy; Laith and Santa Riley</p>
            </footer>
        </div>
    )
}