import Head from "next/head"
import Link from "next/link"
import styles from '../../styles/Home.module.css'

const FirstPost = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>First Post</title>
				<link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className={styles.title}>First Post</h1>
                <h6 className={styles.title}>
                    <Link href="/">Back to home</Link>
                </h6>
            </main>
        </div>
    )
}

export default FirstPost
