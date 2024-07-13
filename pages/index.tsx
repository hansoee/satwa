import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Satwa Alam Coban Talun</h1> */}
        <ImageCarousel />
      </main>
    </div>
  );
};

export default Home;
