import Link from 'next/link';
import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>CONTINUE EXPLORING</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo
        debitis est autem dicta.
      </p>

      <Link href="#" className={styles.btnExplore}>
        Explore tours
      </Link>
    </div>
  );
};

export default HomePage;
