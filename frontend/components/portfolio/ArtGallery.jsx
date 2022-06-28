

import Painting from './Painting';


const Gallery = (props) => {

    const {backurl, paintings} = props;
    console.log(paintings);

    return (
        <div className="painting-gallery">
            {paintings.map( painting => (
                <Painting backurl={backurl} data={painting.attributes}/>
                //<img src={backurl + painting.attributes.thumbnail.data.attributes.url}/>
            ))};
        </div>
    );
}

export default Gallery;