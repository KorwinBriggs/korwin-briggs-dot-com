
import Painting from './Painting';
import MagicGrid from 'react-magic-grid';

const Gallery = (props) => {

    const {backurl, paintings} = props;
    let paintingOrder = [];
    console.log(paintings);

    //reorder from order of creation to order of numbers in 'order' attribute
    paintings.sort((a, b) => a.attributes.order - b.attributes.order) 

    return (
        <div className='painting-gallery'>
            <MagicGrid items={paintings.length} gutter={0} animate={true}>
                {paintings.map( painting => (
                        <Painting backurl={backurl} data={painting.attributes}/>
                ))}
            </MagicGrid>
        </div>

    );
    //if replacement works, npm uninstall react-masonry-css
}

export default Gallery;