
import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/shared/Layout';
import ArtGallery from '../components/portfolio/ArtGallery';
import {fetchFromCMS, backurl} from '../lib/service';

// import styles from '../styles/styles.css'

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Korwin Briggs</title>
      </Head>
      <Layout>
        <section className='introduction'>
          <p className='intro-text'>
            Korwin Briggs draws and writes, mostly about mythology, history, and science. 
            He also has a successful webcomic about the same...though it's been a while since the last update.
            Feel free to look at his illustrations, books, or weird interactive coding projects, or join the mailing list for
            a newsletter that, if we're being honest, is like 95% doodles with silly rhyming poems.
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
  return {
    props: {illustrations},
    revalidate: 1,
  };
}