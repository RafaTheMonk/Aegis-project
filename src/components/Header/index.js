/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css";
import Logo from "./Vector-2.png"

function Header() {
  return (
    <header className={styles.header}>
      <img src={ Logo }/>
      <nav>
        <a href="#">Biblioteca</a>
        <a href="#">Assistir</a>
      </nav>
    </header>
  );
}

export default Header;
