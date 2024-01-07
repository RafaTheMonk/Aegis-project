import styles from "./Watch.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageNotFound from "../PageNotFound";
import Container from "../../components/Container";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";

function Watch() {
  const params = useParams();
  const video = videos.find((video) => {
    return video.id === params.id;
  });

  if (!video) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <h1>Assistir</h1>
          <iframe
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="A HISTÓRIA DE GUTS E BERSERK - A ERA DE OURO E O ECLIPSE EXPLICADOS -  NASCE O ESPADACHIM NEGRO"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;
