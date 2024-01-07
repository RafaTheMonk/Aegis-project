import error404 from './error404.png';
import styles from "./PageNotFound.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function PageNotFound() {
    return(
        <>
        <Header />
        <section className={styles.container}>
            <h2>Ops! Conteúdo não localizado!</h2>
            <img src={error404} alt="Logo da página não localizada" />
        </section>
        <Footer />
        </>
    );
}

export default PageNotFound;
