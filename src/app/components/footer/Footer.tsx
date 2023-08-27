import Link from 'next/link';
import {
  FOOTER_COPYRIGHT,
  FOOTER_NAVIGATION,
} from '../../../../constant/footer';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaSquarespace } from 'react-icons/fa';
import styles from './footer.module.css';

const FooterPage = () => (
  <div className={styles['footer-container']}>
    <div className={styles['navlink-container']}>
      {FOOTER_NAVIGATION.map(({ title, navLink }) => (
        <Link href={navLink} key={title} className={styles['navlink']}>
          {title}
        </Link>
      ))}
    </div>
    <div className={styles['icons-container']}>
      <BsFacebook className={styles['icons']} />
      <BsTwitter className={styles['icons']} />
      <FaSquarespace className={styles['icons']} />
    </div>
    <p className={styles['footer-copyright']}>{FOOTER_COPYRIGHT}</p>
  </div>
);

export default FooterPage;
