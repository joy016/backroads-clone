import Link from 'next/link';
import styles from './homePage.module.css';
import {
  BUTTON_EXPLORE,
  HOME_DESCRIPTION,
  HOME_TITLE,
} from '../../../../constant/home';

const HomePage = () => (
  <div className={styles.container}>
    <h1>{HOME_TITLE}</h1>
    <p>{HOME_DESCRIPTION}</p>

    <Link href="#tours" className={styles['btn-explore']}>
      {BUTTON_EXPLORE}
    </Link>
  </div>
);

export default HomePage;
