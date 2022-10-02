
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/shared/Layout';
// import ArtGallery from '../components/portfolio/ArtGallery';
import {fetchFromCMS, backurl} from '../lib/service';
import Markdown from 'markdown-to-jsx';

// import styles from '../styles/styles.css'


export default function About(props) {


    const data = props.about.data.attributes;
    const picture = data.picture.data.attributes;

  return (
    <div>
      <Head>
        <title>Korwin Briggs (.com) - Korwin Who?</title>
      </Head>
      <Layout>
        <article>


            <h1>{data.title}</h1>

            <figure id='about-picture' className='image-standard'>
                <Image 
                    
                    src={backurl + picture.url}
                    sizes="100vw"
                    width={picture.width}
                    height={picture.height}
                />
            </figure>

            <section id='about-text'>
                <Markdown>{data.copy}</Markdown>
            </section>

        </article>
      </Layout>
    </div>
  )
}

//getStaticProps is a Nextjs thing; establishes props for the static pages it generates.
//fetchFromCMS is in lib/service.js, uses axios to load api stuff
export async function getStaticProps() {
  const about = await fetchFromCMS('api/about?populate=*');
  return {
    props: {about},
    revalidate: 1,
  };
}