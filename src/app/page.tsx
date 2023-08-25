import styles from './components/home/homePage.module.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import aboutStyles from './components/about/about.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className={styles.homeContainer}>
        <HomePage />
      </section>
      <section className={aboutStyles.aboutContainer}>
        <AboutPage />
      </section>
    </main>
  );
}
