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
      <section id="home" className={styles['home-container']}>
        <HomePage />
      </section>
      <section
        id="about"
        className={aboutStyles['about-container']}
      >
        <AboutPage />
      </section>
      <section id="services" className={servicesStyles['section-services']}>
        <ServicesPage />
      </section>
      <section id="tours" className={featuredStyles['section-featured']}>
        <FeaturedPage />
      </section>
      <section className={footerStyles['section-footer']}>
        <FooterPage />
      </section>
    </main>
  );
}
