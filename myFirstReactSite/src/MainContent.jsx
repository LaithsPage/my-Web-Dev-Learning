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

export default function MainContent() {
    return (
        <div className="main-grid">
            
            <div className="column-1">
                <div>
                <img src="../public/images/easternmarket_composite_05.jpg" alt="not found" />
                </div>
                
                <div className="image-container">
                    <img src="../public/images/westview 2.jpg" alt="#" />
                </div>
            </div>

            <div className="column-2">
                <img src="../public/images/rochester_composite_09.jpg" alt="#" />
                <img src="../public/images/westview_composite_19.jpg" alt="#" /> 
                <img src="../public/images/easternmarket_composite_05.jpg" alt="#" />
            </div>
        </div>
    );
}