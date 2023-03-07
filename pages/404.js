import Link from 'next/link';
import Head from 'next/head';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push('/'), 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Blog List | 404</title>
        <meta name="keywords" content="blogs"></meta>
      </Head>
      <div className="not-found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>

        <p>
          Go back to the <Link href="/">homepage</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
