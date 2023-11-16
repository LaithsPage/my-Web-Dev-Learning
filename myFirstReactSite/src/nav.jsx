/* To make a top nav bar that has logo and links, what do I need?
   In a standard HTML page, this would be:

    <div>
        <nav>
            <div class='logo'> (logo text or img here) </div>
            <ul class='nav-links'> <li> (list of links here) </li> </ul>
        </nav>
    </div>

What data is needed to be passed? Is there state involved?
The logo needs to receive whatever the logo will be made out of. Start with just text.
The links will need to receive the text that the links will be made out of.
Later we can try adding style and effects such as hovering over and clicking the links

div
  nav
    div
      list

 */

/* function creates the links for the nav bar */
import './nav.css'
function ListOfLinks({arrayOfLinks}) {

    function handleMouseOver() {
        alert('You hovered me!');
    }
    
    return (
        <ul className="nav-list">
            {arrayOfLinks.map(({link, text, id}) => (
            <li key={id}><a href={link} /* onMouseOver={handleMouseOver} */>{text}</a>
            </li>
            ))}
        </ul>
    );
}

function Logo() {
    return (
        <div className="logo">Santa Riley</div>
    )
}

export default function Nav({links}) {
    return (
        <>
        <div>
            <nav className="nav-bar">
                <Logo />
                <ListOfLinks arrayOfLinks={links} />
            </nav>
        </div>
        </>
    );
}
const links = [
  
    {link: 'index.html', text: "Home"},
    {link: 'index.html', text: "Santa's Bio"},
    {link: 'index.html', text: "Gallery"},
    {link: 'index.html', text: "Learn About Santa"},
    {link: 'index.html', text: "Book A Visit"},
    {link: 'index.html', text: "Santa's Schedule"},
    {link: 'index.html', text: "Facebook"},
    
  ]
  


/*                 {
                    //if this was javascript, i would want to make a list element that has a link in it
                    // so <li><a href="index.html" /></li>
                    // break it down:
                    // <li key={index}><a href="{linkProp}">{textProp}</a></li>
                } */