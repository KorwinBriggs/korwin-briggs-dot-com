
import Masonry from 'react-masonry-css';
import Painting from './Painting';


const Gallery = (props) => {

    const {backurl, paintings} = props;
    const galleryBreakpoints = {
        default: 3,
        1100: 2,
        600: 1,
    };

    return (
        <div className="painting-gallery">

            <Masonry breakpointCols={galleryBreakpoints} className='painting-gallery-grid' columnClassName='painting-gallery-column'>

                {paintings.map( painting => (
                    <Painting backurl={backurl} data={painting.attributes}/>
                    //note to self: have to pass props down like this; can't import directly to component
                ))}

            </Masonry>

        </div>
    );
}

export default Gallery;