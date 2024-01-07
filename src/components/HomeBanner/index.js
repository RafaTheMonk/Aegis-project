/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./HomeBanner.module.css";
import cadeado from "./images/cadeado.png";
import Container from "./../Container/index";

function HomeBanner() {
  return (
    <Container>
      <section className={styles.home}>
        <div className={styles.home_text}>
          <h1>Aegis</h1>
          <h2>CiberSecurity School</h2>
          <h5>
            Desenvolvido por Team EMB <span> da Bahia - Brasil </span>
          </h5>
          <p>
            A Aegis é uma iniciativa pioneira do time EMB (Evo Mind and Body)
            que tem como objetivo oferecer treinamento especializado em
            segurança cibernética para empresas e usuários comuns que desejam se
            familiarizar com os novos conceitos de segurança na era digital.
          </p>
          <div className={styles.homeCardGroup}>
            <a href="#">
              <i className={styles.homeCard}></i>
            </a>
            <a href="#">
              <i className={styles.homeCard}></i>
            </a>
            <a href="#">
              <i className={styles.homeCard}></i>
            </a>
          </div>
        </div>
        <img src={cadeado} alt="Cadeado" />
      </section>
    </Container>
  );
}

export default HomeBanner;
