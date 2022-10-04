
import Head from 'next/head'
import Image from 'next//future/Image'
import Layout from '../components/shared/Layout';
import ArtGallery from '../components/portfolio/ArtGallery';
import Markdown from 'markdown-to-jsx';
import {fetchFromCMS, backurl} from '../lib/service';

// import styles from '../styles/styles.css'

export default function Home(props) {

  const portrait = props.home.data.attributes.picture.data;

  return (
    <div>
      <Head>
        <title>Korwin Briggs</title>
      </Head>
      <Layout>
        <section className='introduction'>

          <Image 
              className='intro-portrait'
              src={backurl + portrait.attributes.url}
              sizes=" (max-width: 768px) 100vw,
                      66vw"
              width={portrait.attributes.width}
              height={portrait.attributes.height}
          />

          <p className='intro-text'>
            <Markdown>{props.home.data.attributes.introtext}</Markdown>
          </p>
        </section>
        <hr />
        <ArtGallery backurl={backurl} paintings={props.illustrations.data} />
      </Layout>
    </div>
  )
}

//getStaticProps is a Nextjs thing; establishes props for the static pages it generates.
//fetchFromCMS is in lib/service.js, uses axios to load api stuff
export async function getStaticProps() {
  const illustrations = await fetchFromCMS('api/illustrations?populate=*');
  const home = await fetchFromCMS('api/home?populate=*');
  return {
    props: {illustrations, home},
    revalidate: 1,
  };
}