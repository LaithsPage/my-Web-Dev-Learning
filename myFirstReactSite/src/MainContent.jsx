/* 
The main content of this web page is below. 
The images will have 2 columns and be of various sizes, creating an offset look
Then there will be a big image that takes up the full width of the container
This^ image, by nature of taking up more space, will be more representative of the brand
This image^ will have some text below it
Sometimes descriptive text will be between images

<div>
    <div> 
        Some Text here 
    </div>
    <div> 
        <div>
            <img>
            <img>
            <img>
            <img>
            <img>
        </div>

        <div>
            <img>
            <p>text</p>
        </div>

        <img>
        <img>
    </div>
</div>

What do I need? State would not be necessary at this point as the content is static.
In the future, maybe the images can change, but keep their position on the web page.
Or maybe the positons and the images can chaange.
For now, a grid is needed that has 2 columns, within the columns are 

*/
// can break array up into one array for each column so it is easier to differentiate between and change later
const imagePaths = [
    { id: 'img1', path: '../public/images/easternmarket_composite_05.jpg' },
   // { id: 'img2', path: '../public/images/westview_composite_07.jpg' },
    { id: 'img2', path: '../public/images/westview 2.jpg' },
    { id: 'img3', path: '../public/images/rochester_composite_09.jpg' },
    { id: 'img4', path: '../public/images/westview_composite_19.jpg' },
    { id: 'img5', path: '../public/images/easternmarket_composite_05.jpg' },
    { id: 'img6', path: '../public/images/rochester 1.jpg' },
    { id: 'img7', path: '../public/images/rochester 1.jpg' },
  ];

export default function MainContent() {
    return (
        <>
        <div className="main-wrapper">
            
            <div className="main-header">
                Meet Santa Riley
            </div>
            
            <div className="main-grid">
                <div className="column-1">
                        {imagePaths.slice(0, 2).map(({id, path}) => (
                            <div key={id}>
                                <img src={path} alt={`Image ${id}`} />
                            </div>
                        ))}
                </div>

                <div className="column-2">
                    {imagePaths.slice(2, 5).map(({ id, path }) => (
                        <img key={id} src={path} alt={`Image ${id}`} />
                    ))}
                </div>

{/*                 <div className="column-3">
                    <img src={imagePaths[5].path} alt={`Image ${imagePaths[5].id}`} />
                </div> */}
            
            </div>

            <div>
                <p>Something about Santa Riley here. Something about Santa Riley here. Something about Santa Riley here. Something about Santa Riley here. </p>
                <a href="#">Santa Link here </a>
            </div>

            <div className="column-4">
                <img src={imagePaths[6].path} alt={`Image ${imagePaths[6].id}`} />
                <h3>Headline Text</h3>
                <p>Follow up info</p>
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                </form>
            </div>

        </div>
        </>
    );
}