
import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/shared/Layout';
import ArtGallery from '../components/portfolio/ArtGallery';
import {fetchFromCMS, backurl} from '../lib/service';

// import styles from '../styles/styles.css'

export default function Books() {

  return (
    <div>
      <Head>
        <title>Korwin Briggs</title>
      </Head>
      <Layout>
          <h2>Books I've Written (and illustrated)</h2>

          <section id='gods-heroes'>
            <h3>Gods and Heroes</h3>
          </section>
          <section id='invention-hunters-1'>
            <h3>The Invention Hunters Discover How Machines Work</h3>
          </section>
          <section id='invention-hunters-2'>
            <h3>The Invention Hunters Discover How Electricity Works</h3>
          </section>
          <section id='invention-hunters-3'>
            <h3>The Invention Hunters Discover How Light Works</h3>
          </section>
          <section id='invention-hunters-4'>
            <h3>The Invention Hunters Discover How Sound Works</h3>
          </section>

          <h2>Books I've Illustrated (but not written)</h2>
          <section id='professor-chicken'>
            <h3>The History of Underwear With Professor Chicken</h3>
          </section>
          <section id='dung-for-dinner'>
            <h3>Dung For Dinner</h3>
          </section>
          <section id='baby-geek'>
            <h3>Baby Geek</h3>
          </section>
      </Layout>
    </div>
  )
}