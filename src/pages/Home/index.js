import HomeBanner from "../../components/HomeBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeServices from "../../components/HomeCard";
import AboutUs from "../../components/AboutUs";
import CardsAtividade from "../../components/CardsAtividade";
import Contact from "../../components/Contact";

function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomeServices />
      <AboutUs />
      <CardsAtividade />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
