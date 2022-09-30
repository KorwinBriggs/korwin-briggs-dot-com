import Head from 'next/head'
import Image from 'next/future/Image'
import Layout from '../../components/shared/Layout';
import ArtGallery from '../../components/portfolio/ArtGallery';
import { fetchFromCMS, backurl } from '../../lib/service';
import Markdown from 'markdown-to-jsx';

// import styles from '../styles/styles.css'


export default function Pictures(props) {
  const data = props.illustration.attributes;
  const mainImage = data.mainImage.data.attributes;
  const additionalImages = data.additionalImages.data;

  return (
    <div>
      <Head>
        <title>Korwin Briggs (.com) - Illustrations - {data.title}</title>
        <meta name='description' content={data.blurb} />
      </Head>
      <Layout>

        <article className='illustration-page' >

          {/* <Image 
            className='illustration-bg'
            src={backurl + mainImage.url}
            sizes="100vw"
            width={mainImage.width}
            height={mainImage.height}/> */}

          <section className='illustration-main'>

            <div className='illustration-description'>
              <h1 className='post-title illustration-title'>{data.title}</h1>
              <Markdown className='post-copy illustration-copy'>{data.post}</Markdown>
            </div>

            <figure className='illustration-images'>
              
               <Image 
                className='illustration-image'
                src={backurl + mainImage.url}
                sizes="100vw"
                width={mainImage.width}
                height={mainImage.height}
              />

              {/* the && operator here makes sure additionalimages exists.
                  otherwise the page will fail in cases where they don't.
                  have to do it this way, can't use if statements or whatever. */}
              {additionalImages != null && <div className='illustration-additional-images'>
                {additionalImages.map( (image) => (
                  <Image 
                    className='illustration-image'
                    src={backurl + image.attributes.url}
                    width={image.attributes.width}
                    height={image.attributes.height}
                  />
                ))}
              </div>}

            </figure>

            

          </section>

        </article>

        <hr />

        <h2>But Wait, There's More!</h2>

        <ArtGallery backurl={backurl} paintings={props.illustrations.data} />

      </Layout>
    </div>
  )
}


//getstaticprops for each page individually by index in the api
//ie; retrieving the info needed for the dynamically generated page

export async function getStaticProps({params}) {
  const illustrations = await fetchFromCMS('api/illustrations?populate=*'); 
  //all illos, for painting gallery at bottom of page
  const illustration = await fetchFromCMS('api/illustrations?filters[slug][$eq]=' + params.slug + '&populate=*');
  //one illo, called separately so I can filter by slug on backend instead of manually filtering here.
  
  return {
    props: {
      illustration: illustration.data[0],
      illustrations: illustrations,
    },
    revalidate: 1,
  } 
}


//getstaticpaths determines which paths nextjs will pre-render as static pages.
//it needs to return a paths object with params that match the bracketed placeholder
//term in the page name (in this case, 'slug')

export async function getStaticPaths() {
  const illustrations = await fetchFromCMS('api/illustrations')

  return {
    paths: illustrations.data.map( (illo) => ({
      params: {
        slug: illo.attributes.slug,
      },
    })),
    fallback: false, //displays 404 page for any nonexistant slugs
  }
}
