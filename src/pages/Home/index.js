import HomeBanner from "../../components/HomeBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css"
import HomeServices from "../../components/HomeCard";
import AboutUs from "../../components/AboutUs";
import CardsAtividade from "../../components/CardsAtividade";
import Contact from "../../components/Contact";

function Home() {
  return (
    <>
      <section className={styles.home}>
      <Header />
      <HomeBanner />
      <HomeServices />
      <AboutUs />
      <CardsAtividade />
      <Contact />
      <Footer />
      </section>
    </>
  );
}

export default Home;
