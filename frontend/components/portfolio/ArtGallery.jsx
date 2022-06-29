

import Painting from './Painting';


const Gallery = (props) => {

    const {backurl, paintings} = props;

    return (
        <div className="painting-gallery">
            {paintings.map( painting => (
                <Painting backurl={backurl} data={painting.attributes}/>
                //note to self: have to pass props down like this; can't import directly to component
            ))};
        </div>
    );
}

export default Gallery;