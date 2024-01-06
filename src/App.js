import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import videos from "./json/videos.json";
import Category from "./components/Category";

const categories = ["Nível iniciante", "Nível intermediário", "Nível avançado"];

function filterCategory(id) {
  return videos.filter((video) => video.category === categories[id]);
}

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <Category category={categories[0]}>
          {filterCategory(0).map((video) => (
            <Card id={video.id} key={video.id} />
          ))}
        </Category>
        <Category category={categories[1]}>
          {filterCategory(1).map((video) => (
            <Card id={video.id} key={video.id} />
          ))}
        </Category>
        <Category category={categories[2]}>
          {filterCategory(2).map((video) => (
            <Card id={video.id} key={video.id} />
          ))}
        </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;
