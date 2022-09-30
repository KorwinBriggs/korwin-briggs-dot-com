
import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/shared/Layout';
import Book from '../components/books/Book';
import {fetchFromCMS, backurl} from '../lib/service';

// import styles from '../styles/styles.css'

export default function Books(props) {

  const data = props.books.data;

  let writtenAndIllustrated = []
  let onlyIllustrated = []

  data.forEach(book => {
    if (book.attributes.written) writtenAndIllustrated.push(book);
    else onlyIllustrated.push(book);
  });

  writtenAndIllustrated.sort((a, b) => a.attributes.order - b.attributes.order)
  onlyIllustrated.sort((a, b) => a.attributes.order - b.attributes.order)

  return (
    <div>
      <Head>
        <title>Korwin Briggs</title>
      </Head>
      <Layout>

        
          <h1>Books I've Written (and illustrated)</h1>

          {/* the && operator here makes sure additionalimages exists.
          otherwise the page will fail in cases where they don't.
          have to do it this way, can't use if statements or whatever. */}
          {writtenAndIllustrated[0] != null && <section className='written-and-illustrated'>
        
            {writtenAndIllustrated.map( book => (
              <Book backurl={backurl} data={book.attributes} />
            ))}

          </section>}

          {onlyIllustrated[0] != null && <section className='only-illustrated'>
            <h1>Books I've Illustrated (but not written)</h1>

            {onlyIllustrated.map( book => (
              <Book backurl={backurl} data={book.attributes} />
            ))}

          </section>}
          
      </Layout>
    </div>
  )
}

//getStaticProps is a Nextjs thing; establishes props for the static pages it generates.
//fetchFromCMS is in lib/service.js, uses axios to load api stuff
export async function getStaticProps() {
  const books = await fetchFromCMS('api/books?populate=*');
  return {
    props: {books},
    revalidate: 1,
  };
}