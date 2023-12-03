import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>Aegis Cibersegurança</span>
      <nav>
        <a href="#">Biblioteca</a>
        <a href="#">Assistir</a>
      </nav>
    </header>
  );
}

export default Header;
