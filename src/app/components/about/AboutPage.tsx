import styles from './about.module.css';
import Link from 'next/link';
import {
  ABOUT_IMAGE,
  ABOUT_TITLE,
  ABOUT_TITLE_SPAN,
  ARTICLE_TITLE,
  FIRST_DESCRIPTION,
  READ_MORE_BUTTON,
  SECOND_DESCRIPTION,
} from '../../../../constant/about';

const AboutPage = () => (
  <div>
    <h1>
      {ABOUT_TITLE} <span>{ABOUT_TITLE_SPAN}</span>
    </h1>
    <div className={styles['about-tiles']}>
      <div className={styles['about-image']}>
        <img
          src={ABOUT_IMAGE.imageSrc}
          alt={ABOUT_IMAGE.imageAlt}
          className={styles['about-photo']}
        />
      </div>

      <article>
        <h4>{ARTICLE_TITLE}</h4>
        <p>{FIRST_DESCRIPTION}</p>
        <p>{SECOND_DESCRIPTION}</p>
        <Link href="#home" className={styles['btn-readmore']}>
          {READ_MORE_BUTTON}
        </Link>
      </article>
    </div>
  </div>
);

export default AboutPage;
