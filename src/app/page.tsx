import styles from './components/home/homePage.module.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import aboutStyles from './components/about/about.module.css';
import ServicesPage from './components/services/services';
import servicesStyles from './components/services/services.module.css';
import FeaturedPage from './components/featured/Featured';
import featuredStyles from './components/featured/featured.module.css';
import FooterPage from './components/footer/Footer';
import footerStyles from './components/footer/footer.module.css';

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
      <section className={servicesStyles.sectionServices}>
        <ServicesPage />
      </section>
      <section className={featuredStyles.sectionFeatured}>
        <FeaturedPage />
      </section>
      <section className={footerStyles['section-footer']}>
        <FooterPage />
      </section>
    </main>
  );
}
