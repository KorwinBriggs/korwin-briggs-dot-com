
import Link from 'next/Link';
//note to self: next/Link is for navigation links to dynamic routes -- ie gallery/[slug]
import Image from 'next/future/Image';
import imageLoader from '../../lib/loader';

const Painting = (props) => {

    const {backurl, data} = props;
    const thumbnail = data.thumbnail.data.attributes;

    return (
        <figure>
            <Link href={'/illustrations/' + data.slug}>
                    <Image className="painting"

                        src={backurl + thumbnail.url} 
                        sizes=" (max-width: 500px) 100vw,
                                (max-width: 800px) 50vw,
                                (max-width: 1200px) 33vw,
                                25vw"
                        alt={data.name}
                        width={thumbnail.width}
                        height={thumbnail.height}

                        loader={imageLoader}
                    />
            </Link>
        </figure>
    );
}

export default Painting;