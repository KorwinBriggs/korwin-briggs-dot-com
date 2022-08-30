
// import Masonry from 'react-masonry-css';
import Painting from './Painting';
import Masonry from 'react-masonry-component';

const Gallery = (props) => {

    // const galleryBreakpoints = {
    //     default: 3,
    //     1100: 2,
    //     600: 1,
    // };


    const {backurl, paintings} = props;
    let paintingOrder = [];
    console.log(paintings);

    //reorder from order of creation to order of numbers in 'order' attribute
    paintings.sort((a, b) => a.attributes.order - b.attributes.order) 

    //options for masonry thing below - reference at https://masonry.desandro.com/options.html
    const masonryOptions = {
        transitionDuration: 0.1,
        stagger:0.1,
        resize: true,
    }

    return (
        // <div className="painting-gallery">

        //     <Masonry breakpointCols={galleryBreakpoints} className='painting-gallery-grid' columnClassName='painting-gallery-column'>

        //         {paintings.map( painting => (
        //             <Painting backurl={backurl} data={painting.attributes}/>
        //             //note to self: have to pass props down like this; can't import directly to component
        //         ))}

        //     </Masonry> 

        // </div>

        <Masonry
            className={'painting-gallery'}
            // elementType={div}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            // imagesLoadedOptions={}
        >

            {paintings.map( painting => (
                    <Painting backurl={backurl} data={painting.attributes}/>
                    //note to self: have to pass props down like this; can't import directly to component
            ))}

        </Masonry>
    );
    //if replacement works, npm uninstall react-masonry-css
}

export default Gallery;