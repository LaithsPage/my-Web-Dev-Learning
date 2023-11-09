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
function ListOfLinks({arrayOfLinks}) {
    
    return (
        <ul>
            {arrayOfLinks.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
}

function Logo() {
    return (
        <div>Put Logo here</div>
    )
}

export default function Nav() {
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
    "Home", "Santa's Bio", "Gallery", 
    "Learn About Santa", "Book A Visit", "Santa's Schedule"
];

/*  {linkName: "Home", id: 1}, 
    {linkName: "Santa's Bio", id: 1}, 
    {linkName: "Gallery", id: 1}, 
    {linkName: "Learn About Santa", id: 1}, 
    {linkName: "Book A Visit", id: 1}, 
    {linkName: "Santa's Schedule", id: 1},  */