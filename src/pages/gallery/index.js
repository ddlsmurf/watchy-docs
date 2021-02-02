import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import PostsList from './PostsList';
import styles from './gallery.module.css';

function Hello() {
    useEffect(() => {
        if (window.instgrm)
            window.instgrm.Embeds.process();
        }, []);
            
  return (
    <Layout title="Gallery">
      <div className={'row row--no-gutters '}>
        <div className="col col--3"></div>
        <PostsList posts={posts} />
        <div className="col col--3"></div>
      </div>
    </Layout>
  );
}

export default Hello;

var posts = [
    "https://www.instagram.com/p/CKzmpX6rWKZ",
    "https://www.instagram.com/p/CKT4z9Wr8nT",
    "https://www.instagram.com/p/CKuq53KJuHm",
    "https://www.instagram.com/p/CKwHO1tLMJU",
    "https://www.instagram.com/p/CKwcRHHrE9I",
    "https://www.instagram.com/p/CKPfrP6gBV9",
    "https://www.instagram.com/p/CKF-ecGr6dL",
    "https://www.instagram.com/p/CJ4z8EZAYFB",
    "https://www.instagram.com/p/CJphnILgNoJ",
    "https://www.instagram.com/p/CJXgPr9Atd-",
    "https://www.instagram.com/p/CKy6Mo9jvXn",
    "https://www.instagram.com/p/CI87IyMrMWd",
    "https://www.instagram.com/p/CKLrQijD3St",
    "https://www.instagram.com/p/CI4BHLorhc9",
    "https://www.instagram.com/p/CIErV5UgfRK",
    "https://www.instagram.com/p/CIAC3GtLeKm",
    "https://www.instagram.com/p/CGvi4OfrF3o",
    "https://www.instagram.com/p/CGVkuFCDrXV",
    "https://www.instagram.com/p/B9f5WivHEZv",
    "https://www.instagram.com/p/B8sIr6WH3b0",
    "https://www.instagram.com/p/B4itbQLnWUb",
    "https://www.instagram.com/p/BoF58KLnaGo",
    "https://www.instagram.com/p/Bn5DOclAnT3"
];