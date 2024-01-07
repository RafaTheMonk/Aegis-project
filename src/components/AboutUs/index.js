/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "../Container";
import styles from "./AboutUs.module.css";
import dados from "./images/dados.png";

function AboutUs() {
  return (
    <Container>
      <section className={styles.about}>
        <img src={dados} alt="" />
        <div className={styles.about_text}>
          <h3>Bem-vindo ao futuro!</h3>
          <p>
            Em um mundo cada vez mais conectado, onde a tecnologia desempenha um
            papel fundamental em nossas vidas, é essencial estar preparado para
            lidar com os desafios e ameaças que surgem no ambiente digital. A
            CiberSecurity School foi desenvolvida para capacitar os
            participantes a entenderem e enfrentarem esses desafios de forma
            proativa.
          </p>
          <a href="#" className={styles.btn}>
            Assine aqui
          </a>
        </div>
      </section>
    </Container>
  );
}

export default AboutUs;
