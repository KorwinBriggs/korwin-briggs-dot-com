

import Painting from './Painting';


const Gallery = (props) => {

    const {backurl, paintings} = props;
    console.log(paintings);

    return (
        <div className="painting-gallery">
            {paintings.map( painting => (
                <Painting backurl={backurl} data={painting.attributes}/>
            ))};
        </div>
    );
}

export default Gallery; 