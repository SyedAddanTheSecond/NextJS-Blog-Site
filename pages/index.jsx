import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Bruh JoJo Is Fire!</p>
		<p>
			First <Link href="/posts/first-post">Blog.</Link>
		</p>
      </section>
    </Layout>
  )
}

export default Home