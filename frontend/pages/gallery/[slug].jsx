import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/shared/Layout';
import { fetchFromCMS, backurl } from '../../lib/service';

// import styles from '../styles/styles.css'


export default function Pictures() {
  return (
    <div>
      <Head>
        <title>Korwin Briggs (.com) - {}</title>
      </Head>
      <Layout>
        <main>
          <p>specific gallery item</p>
        </main>
      </Layout>
    </div>
  )
}

//getstaticprops for each page individually by index in the api
//ie; retrieving the info needed for the dynamically generated page
export async function getStaticProps({ params }) {
  const illustrations = await fetchFromCMS('api/illustrations?populate=*')
}

//getstaticpaths by pulling the slug from the given api response above
//ie, naming the dynamically generated page

