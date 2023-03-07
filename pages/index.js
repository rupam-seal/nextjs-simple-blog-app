import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog List | Home</title>
        <meta name="keywords" content="blogs"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          debitis eos impedit perspiciatis numquam quisquam accusamus magnam
          natus sunt maiores doloremque commodi, aliquam voluptatibus! Numquam
          rerum dolore debitis ab quae.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          debitis eos impedit perspiciatis numquam quisquam accusamus magnam
          natus sunt maiores doloremque commodi, aliquam voluptatibus! Numquam
          rerum dolore debitis ab quae.
        </p>
        <Link href="/blogs">
          <div className={styles.btn}>See Blogs</div>
        </Link>
      </div>
    </>
  );
}
