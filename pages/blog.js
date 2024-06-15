import styles from './index.module.css';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Blog</h1>
      <div className={styles.card}>
        <p>Read our latest blog posts about the real estate market.</p>
      </div>
      <div className={styles.blogList}>
        <div className={styles.blogPost}>
          <h3>Understanding the Market</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="/blog-post-1">Read more</a></p>
        </div>
        <div className={styles.blogPost}>
          <h3>Tips for First-Time Homebuyers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="/blog-post-2">Read more</a></p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
