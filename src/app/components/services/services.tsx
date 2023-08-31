import { SERVICES_TITLE, SERVICE_INFO } from '../../../../constant/services';
import styles from './services.module.css';

const ServicesPage = () => (
  <div className={styles['section-title']}>
    <h1>
      {SERVICES_TITLE.title} <span>{SERVICES_TITLE.spanTitle}</span>
    </h1>
    <div className={styles['section-center']}>
      {SERVICE_INFO.map((item) => {
        const { Icon } = item;
        return (
          <article key={item.id} className={styles.service}>
            <span>
              <Icon className={styles.icons} />
            </span>
            <div>
              <h4>{item.titleInfo}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  </div>
);

export default ServicesPage;
