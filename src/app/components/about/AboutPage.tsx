import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1>
        about <span>us</span>
      </h1>
      <div className={styles.aboutTiles}>
        <div className={styles.aboutImage}>
          <img
            src="/images/about.jpeg"
            alt="Picture of the author"
            className={styles.aboutPhoto}
          />
        </div>

        <article>
          <h4>Explore The Difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <Link href="#" className={styles.btnReadMore}>
            Read more
          </Link>
        </article>
      </div>
    </div>
  );
};

export default AboutPage;
