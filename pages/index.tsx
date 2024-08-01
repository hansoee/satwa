import ImageCarousel from '../components/ImageCarousel';
import Slider from '../components/Slider'
import useWindowSize from '../hooks/useWindowSize';
import styles from '../styles/Home.module.css';

export default function Home(){
  const size = useWindowSize();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {size.width > 768 ? <Slider /> : <ImageCarousel />}
      </main>
    </div>
  );
};