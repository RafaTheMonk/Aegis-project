import styles from "./Favorites.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";

function Favorites() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus Favoritos</h2>
          Lista de Favoritos
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
