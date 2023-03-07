import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Blogs.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Blogs() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Blog List | Blogs</title>
        <meta name="keywords" content="blogs"></meta>
      </Head>
      <div>
        <h1>All Blogs</h1>
        {blogs &&
          blogs.map((blog) => {
            return (
              <div key={blog.id} className={styles.single}>
                <Link href={`/blogs/${blog.id}`}>
                  <h3>{blog.title}</h3>
                  <p>{blog.body}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Blogs;
