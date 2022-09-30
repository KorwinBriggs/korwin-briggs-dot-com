
import Link from 'next/Link';
//note to self: next/Link is for navigation links to dynamic routes -- ie gallery/[slug]
import Image from 'next/future/Image';
import Markdown from 'markdown-to-jsx';

const Book = (props) => {

    const {backurl, data} = props;
    const cover = data.cover.data.attributes;
    const interiors = data.interiors.data;
    const colors = {
        backgroundColor: data.bgcolor,
        color: data.txtcolor,
    }

    return (
        <article className='book' style={colors}>

            <section className='book-description'>
                <h2>{data.title}</h2>
                <h3>{data.subtitle}</h3>
                <section className='publisher-blurb'>
                    <h4>Publisher's Description</h4>
                    <Markdown>{data.publisherdescription}</Markdown>
                </section>
                <section className='korwin-blurb'>
                    <h4>My Notes</h4>
                    <Markdown>{data.mydescription}</Markdown>
                </section>
            </section>

            <figure className='book-images'>
              
               <Image 
                className='book-cover'
                src={backurl + cover.url}
                sizes="100vw"
                width={cover.width}
                height={cover.height}
              />

              {/* the && operator here makes sure additionalimages exists.
                  otherwise the page will fail in cases where they don't.
                  have to do it this way, can't use if statements or whatever. */}
              {interiors != null && <div className='book-interiors'>
                {interiors.map( (image) => (
                  <Image 
                    className='book-image'
                    src={backurl + image.attributes.url}
                    width={image.attributes.width}
                    height={image.attributes.height}
                  />
                ))}
              </div>}

            </figure>
        </article>
    );
}


export default Book;