import styles from './index.module.css';

const OurAgentsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Our Agents</h1>
      <div className={styles.card}>
        <p>Meet our experienced team of real estate agents.</p>
      </div>
      <div className={styles.agentList}>
        <div className={styles.agent}>
          <img src="/agent1.jpg" alt="Agent 1" className={styles.agentPhoto} />
          <h3>John Doe</h3>
          <p>Specializes in residential properties.</p>
        </div>
        <div className={styles.agent}>
          <img src="/agent2.jpg" alt="Agent 2" className={styles.agentPhoto} />
          <h3>Jane Smith</h3>
          <p>Expert in commercial properties.</p>
        </div>
      </div>
    </div>
  );
};

export default OurAgentsPage;
