import styles from "./Search.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import SearchVideoList from "../../components/SearchVideoList";
import videos from "../../json/videos.json";

function Search() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.search}>
          <h1>Pesquisar</h1>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
