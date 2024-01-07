import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import iconFavorite from "./icon1.png";
import iconUnfavorite from "./icon2.png";

function Card({ id }) {
  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
          className={styles.capa}
        />
      </Link>
      <figure className={styles.icon}>
        <img className={styles.icone} src={iconUnfavorite} alt="Ícone" />
      </figure>
    </section>
  );
}

export default Card;
