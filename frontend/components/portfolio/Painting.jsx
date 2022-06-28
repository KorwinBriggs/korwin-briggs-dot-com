
import Link from 'next/Link';
import Image from 'next/Image';

const Painting = (props) => {

    const {backurl, data} = props;
    const thumbnail = data.thumbnail.data.attributes;

    return (
        <div className="painting-container">
            <Link href={'/gallery/' + data.slug}>
                <a>
                    <Image 
                        src={backurl + thumbnail.url} 
                        alt={data.name}
                        width={thumbnail.width}
                        height={thumbnail.height}/>
                </a>
            </Link>
        </div>
    );
}

export default Painting;