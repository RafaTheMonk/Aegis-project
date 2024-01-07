import Container from "../Container";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <Container>
      <section className={styles.contact}>
        <div className={styles.contact_text}>
          <h3>Fale conosco</h3>
          <p>Lorem ipsum dolor, sit, amet consectetur adipisicing elit.</p>
        </div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail para a resposta"
            required
          />
          <input
            type="text"
            name="text"
            placeholder="Envie sua mensagem"
            required
          />
          <input type="submit" name="submit" />
        </form>
      </section>
    </Container>
  );
}

export default Contact;
