/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css";
import Logo from "./Vector-2.png";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Header() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/library">Biblioteca</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/search">Pesquisar</Link>
        <Link Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair
        </Link>
      </nav>
    </header>
  );
}

export default Header;
