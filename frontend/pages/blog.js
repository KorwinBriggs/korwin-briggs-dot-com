
import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/shared/Layout';
import ArtGallery from '../components/portfolio/ArtGallery';
import {fetchFromCMS, backurl} from '../lib/service';

// import styles from '../styles/styles.css'

export default function Blog(props) {

  return (
    <div>
      <Head>
        <title>Doodles and Poems - Korwin Briggs (.com)</title>
      </Head>
      <Layout>
          <h2>A blog</h2>
      </Layout>
    </div>
  )
}

//getStaticProps is a Nextjs thing; establishes props for the static pages it generates.
//fetchFromCMS is in lib/service.js, uses axios to load api stuff
export async function getStaticProps() {
    const blogposts = await fetchFromCMS('api/blogposts?populate=*');
    return {
      props: {blogposts},
      revalidate: 1,
    };
  }