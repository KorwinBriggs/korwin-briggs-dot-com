// import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/shared/Layout';
import fetchFromCMS from '../lib/service';

// import styles from '../styles/styles.css'

//this should be a painting gallery; currently, identical to index, minus the hello i'm korwin bit

export default function Gallery() {
  return (
    <Layout>
      <main>
        <p>Pictures</p>
      </main>
    </Layout>
  )
}

//for loop to display all the paintings?