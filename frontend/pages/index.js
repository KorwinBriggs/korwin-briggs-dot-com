
// import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/shared/Layout';
import ArtGallery from '../components/portfolio/ArtGallery';
import fetchFromCMS from '../lib/service';

// import styles from '../styles/styles.css'


export default function Home(props) {
  //console.log(illustrations);
  //console.log(illustrations['data']);
  return (
    <Layout>
      <main>
        <p>Home page</p>
        //<ArtGallery props={props.illustrations}/>
      </main>
    </Layout>
  )
}

//getStaticProps is a Nextjs thing; establishes props 
//fetchFromCMS is in lib/service.js, uses axios to load api stuff
export async function getStaticProps() {
  const illustrations = await fetchFromCMS('api/illustrations?populate=*');
  return {
    props: {illustrations},
    revalidate: 1,
  };
}