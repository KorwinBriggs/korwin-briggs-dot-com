

import Painting from './Painting'

const Gallery = (illustrations) => {

    console.log(illustrations);
    return (
        <div className="painting-container">
            <p>test test</p>
            <img className="painting-img" alt="this alt text will be pulled from strapi"/>
        </div>
    );
}

export default Gallery;