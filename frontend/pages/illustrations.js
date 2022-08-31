
import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/shared/Layout';
import ArtGallery from '../components/portfolio/ArtGallery';
import {fetchFromCMS, backurl} from '../lib/service';

// import styles from '../styles/styles.css'

//this should be a painting gallery; currently, identical to index, minus the hello i'm korwin bit

export default function Illustrations(props) {

  return (
    <div>
      <Head>
        <title>Korwin Briggs (.com) - Illustrations</title>
      </Head>
      <Layout>
          <p>Illustrations</p>
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