import styles from "./HomeServices.module.css";
import badge1 from "./images/CEH_Badge.png";
import badge2 from "./images/cism.webp";
import badge3 from "./images/CISSP.png";
import Container from "./../Container/index";

function HomeServices() {
  return (
    <Container>
      <section className={styles.homeservices}>
        <h1>Venha se certificar conosco!</h1>
        <div className={styles.certificados_group}>
          <div className={styles.certificados_card}>
            <img src={badge3} alt="CIISP" />
            <h3>CIISP</h3>
            <p>
              O CISSP é uma certificação altamente reconhecida mundialmente em
              segurança da informação. O curso abrange os dez domínios do CBK do
              CISSP e é constantemente atualizado para refletir os problemas
              atuais e contramedidas em segurança de sistemas. É uma
              certificação que atesta suas habilidades em proteger sistemas de
              informação e é amplamente valorizada no mercado.
            </p>
          </div>
          <div className={styles.certificados_card}>
            <img src={badge1} alt="CEH" />
            <h3>CEH</h3>
            <p>
              O CEH (Certified Ethical Hacker) é uma certificação
              internacionalmente reconhecida para profissionais de segurança da
              informação. Também conhecido como "Hacker Ético", foca em
              auditoria, teste de invasão e segurança da informação. A
              certificação capacita os profissionais a identificar
              vulnerabilidades e proteger organizações contra ataques
              cibernéticos, agindo de forma ética. É altamente valorizada no
              mercado e ideal para carreiras em cibersegurança.
            </p>
          </div>
          <div className={styles.certificados_card}>
            <img src={badge2} alt="CISM" />
            <h3>CISM</h3>
            <p>
              O CISM (Certified Information Security Manager) é uma certificação
              reconhecida globalmente em gestão de segurança da informação. É
              voltada para profissionais que lideram e gerenciam programas de
              segurança corporativa. A certificação CISM é um padrão de
              referência no setor, abrangendo estratégias e práticas de
              gerenciamento de segurança eficazes.{" "}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default HomeServices;
