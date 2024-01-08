import Container from "../Container";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <Container>
      <section className={styles.contact}>
        <div className={styles.contact_text}>
          <h3>Fale conosco</h3>
          <p>Digite seu email e mensagem abaixo.</p>
        </div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail para a resposta"
          />
          <input
            type="text"
            name="text"
            placeholder="Envie sua mensagem"
          />
          <input type="submit" name="submit" />
        </form>
      </section>
    </Container>
  );
}

export default Contact;
