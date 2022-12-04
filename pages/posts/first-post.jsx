import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"
import styles from '../../styles/Home.module.css'

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <main>
                <h1 className={styles.title}>First Post</h1>
                <h6 className={styles.title}>
                    Back to <Link href="/">Home.</Link>
                </h6>
            </main>
        </Layout>
    )
}

export default FirstPost
