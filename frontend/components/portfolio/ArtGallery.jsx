
import Painting from './Painting';
import Masonry from 'react-masonry-css';

const Gallery = (props) => {

    const {backurl, paintings} = props;

    //reorder from order of creation to order of numbers in 'order' attribute
    paintings.sort((a, b) => a.attributes.order - b.attributes.order) 

    return (

            <Masonry
                breakpointCols={{
                    default: 4,
                    1200: 3,
                    800: 2,
                    // 500: 1,
                }}
                className='painting-gallery'
                columnClassName='painting-gallery-column'
            >

                {paintings.map( painting => (
                    <Painting key={painting.id} backurl={backurl} data={painting.attributes}/>
                ))}
            
            </Masonry>
    )
}

export default Gallery;