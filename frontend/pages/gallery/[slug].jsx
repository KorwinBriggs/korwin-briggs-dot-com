import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/shared/Layout';
import ArtGallery from '../../components/portfolio/ArtGallery';
import { fetchFromCMS, backurl } from '../../lib/service';

// import styles from '../styles/styles.css'


export default function Pictures(props) {
  const data = props.illustration.attributes;
  const mainImage = data.mainImage.data.attributes;
  const additionalImages = data.additionalImages.data;

  return (
    <div>
      <Head>
        <title>Korwin Briggs (.com) - {data.title}</title>
        <meta name='descryption' content={data.blurb} />
      </Head>
      <Layout>
        <main>

          <h1>{data.title}</h1>

          <div className='main-image'>
            <Image 
              src={backurl + mainImage.url}
              width={mainImage.width}
              height={mainImage.height}
            />
          </div>

          {/* the && operator here makes sure additionalimages exists.
          have to do it this way, can't use if statements or whatever. */}
          {additionalImages != null && <div className='additional-images'>
            {additionalImages.map( (image) => (
                <div className='additional-image'>
                  <Image 
                    src={backurl + image.attributes.url}
                    width={image.attributes.width}
                    height={image.attributes.height}
                  />
                </div>
            ))}
          </div>}
              
          <p className='copy'>{data.post}</p>

          <ArtGallery backurl={backurl} paintings={props.illustrations.data} />

        </main>
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
