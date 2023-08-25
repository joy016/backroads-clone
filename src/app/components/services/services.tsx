import styles from './services.module.css';
import { FaWallet, FaTree, FaSocks } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <>
      <div className={styles.servicesTitle}>
        <h1>
          OUR <span>SERVICES</span>
        </h1>
        <div className={styles.servicesCenter}>
          <article className={styles.service}>
            <span>
              <FaWallet className={styles.icons} />
            </span>
            <div>
              <h4>Saving Money</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Asperiores, officia.
              </p>
            </div>
          </article>
          <article className={styles.service}>
            <span>
              <FaTree className={styles.icons} />
            </span>
            <div>
              <h4>Endless Hiking</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Asperiores, officia.
              </p>
            </div>
          </article>
          <article className={styles.service}>
            <span>
              <FaSocks className={styles.icons} />
            </span>
            <div>
              <h4>Amazing Comfort</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Asperiores, officia.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
