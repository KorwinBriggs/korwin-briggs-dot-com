
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
            
          {/* Korwin Briggs has written and illustrated books, comics, and infographics 
          about science, history, mythology, and other academic-sounding things. 
          This is his fancy portfolio site and (eventually, maybe) blog - 
          see more of his work at <a href="https://www.veritablehokum.com">VeritableHokum.com</a>, 
          or join his mailing list, which he promises is like 95% doodles and silly rhyming poems. */}

          Korwin Briggs has written and illustrated books, comics, and infographics 
          about science, history, mythology, and other academic-sounding things. 
          This is his fancy portfolio site - 
          see more of his work at <a href="https://www.veritablehokum.com">VeritableHokum.com</a>.
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