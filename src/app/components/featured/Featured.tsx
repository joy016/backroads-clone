import {
  FEATURED_TITLE,
  FETURED_TITLE_TOURS,
  TOUR_CARD,
} from '../../../../constant/featured';
import styles from './featured.module.css';
import { BsFlagFill } from 'react-icons/bs';
const FeaturedPage = () => (
  <>
    <h1>
      {FEATURED_TITLE} <span>{FETURED_TITLE_TOURS}</span>
    </h1>
    <div className={styles['centered-grid']}>
      {TOUR_CARD.map(
        ({ id, imageSrc, date, title, description, country, amount, days }) => (
          <article className={styles['tour-card']} key={id}>
            <div className={styles['tour-image']}>
              <img src={imageSrc} alt="" />
              <p>{date}</p>
            </div>
            <div className={styles['tour-info']}>
              <h4>{title}</h4>
              <p>{description}</p>
              <div className={styles['tour-info-footer']}>
                <p>
                  <BsFlagFill />
                  <span>{country}</span>
                </p>
                <p>{amount}</p>
                <p>{days}</p>
              </div>
            </div>
          </article>
        )
      )}
    </div>
  </>
);

export default FeaturedPage;
