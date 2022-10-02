
import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/shared/Layout';
import Book from '../components/books/Book';
import {fetchFromCMS, backurl} from '../lib/service';

// import styles from '../styles/styles.css'

export default function Books(props) {

  let books = props.books.data;
  books.sort((a, b) => a.attributes.order - b.attributes.order);

  return (
    <div>
      <Head>
        <title>Korwin Briggs</title>
      </Head>
      <Layout>

        <div>


          {/* the && operator here makes sure additionalimages exists.
          otherwise the page will fail in cases where they don't.
          have to do it this way, can't use if statements or whatever. */}
          {books != null && <div>

            {books.map( book => (
              <Book backurl={backurl} data={book.attributes} />
            ))}

          </div>}

        </div>
          
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