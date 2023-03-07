import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const blog = () => {
  const router = useRouter();
  const { blog } = router.query;

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${blog}/`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(blog);
  console.log(blogs);

  return (
    <>
      <Head>
        <title>Blog List | Details Page</title>
        <meta name="keywords" content="details"></meta>
      </Head>
      <div>
        <h1>{blogs?.title}</h1>
        <p>{blogs?.body}</p>
      </div>
    </>
  );
};

export default blog;
