import styles from './index.module.css';

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Us</h1>
      <div className={styles.card}>
        <p>REIS Real Estate is dedicated to helping you find the perfect property. We have been in the real estate business for over 20 years and have a wealth of experience and knowledge.</p>
      </div>
      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamList}>
          <div className={styles.teamMember}>
            <img src="/agent1.jpg" alt="Agent 1" className={styles.teamPhoto} />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/agent2.jpg" alt="Agent 2" className={styles.teamPhoto} />
            <h3>Jane Smith</h3>
            <p>Lead Agent</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
