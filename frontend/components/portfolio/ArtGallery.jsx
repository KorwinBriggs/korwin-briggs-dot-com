
import Painting from './Painting';
import { XMasonry, XBlock } from "react-xmasonry";

const Gallery = (props) => {

    const {backurl, paintings} = props;
    let paintingOrder = [];
    console.log(paintings);

    //reorder from order of creation to order of numbers in 'order' attribute
    paintings.sort((a, b) => a.attributes.order - b.attributes.order) 

    return (
            <XMasonry>
                {paintings.map( painting => (
                    <XBlock>
                        <Painting backurl={backurl} data={painting.attributes}/>
                    </XBlock>
                ))}
            </XMasonry>

    );
    //if replacement works, npm uninstall react-masonry-css
}

export default Gallery;