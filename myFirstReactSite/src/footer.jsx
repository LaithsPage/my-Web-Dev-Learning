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
    "Home", "Santa's Bio", "Gallery", 
    "Learn About Santa", "Book A Visit", "Santa's Schedule", "Facebook"
  ];

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