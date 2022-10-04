
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
    const divider = {
        borderTop: '1px solid ' + data.txtcolor,
    }

    return (
        <article className='two-column-holder' style={colors}>

            <section className='column-left' id='books-description'>
                <h2 className='post-title'>{data.title}</h2>
                <h3 className='post-title'>{data.subtitle}</h3>
                <hr style={divider}/>
                <section className='publisher-blurb'>
                    <h4>{data.publisher} says:</h4>
                    <Markdown>{data.publisherdescription}</Markdown>
                </section>
                <hr style={divider}/>
                <section className='korwin-blurb'>
                    <h4><em>Korwin says:</em></h4>
                    <Markdown>{data.mydescription}</Markdown>
                </section>
            </section>

            <figure className='column-right' id='books-images'>
              
               <Image 
                className='book-cover'
                src={backurl + cover.url}
                sizes=" (max-width: 768px) 100vw,
                        66vw"
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
                    sizes=" (max-width: 768px) 100vw,
                            66vw"
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