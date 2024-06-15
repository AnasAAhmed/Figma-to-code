import styles from './index.module.css';

const GalleryPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Gallery</h1>
      <div className={styles.card}>
        <p>Browse through our property gallery.</p>
      </div>
      <div className={styles.gallery}>
        <img src="/gallery1.jpg" alt="Gallery 1" className={styles.galleryPhoto} />
        <img src="/gallery2.jpg" alt="Gallery 2" className={styles.galleryPhoto} />
        <img src="/gallery3.jpg" alt="Gallery 3" className={styles.galleryPhoto} />
      </div>
    </div>
  );
};

export default GalleryPage;
