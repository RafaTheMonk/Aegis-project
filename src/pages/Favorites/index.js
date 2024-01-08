import styles from "./Favorites.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";
import Banner from "../../components/Banner";

function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Header />
      <Banner  image="favoritos" />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus Favoritos</h2>
          {<VideoList videos={favorite} emptyHeading={"Sem Favoritos"}/>}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
