import styles from "./Header.module.css";
import logo from "../assets/images/blume.png";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.headerText}>Vergissmeinnicht</p>
        <img className={styles.logo} src={logo} alt="Logo" />
      </header>
    </>
  );
}

export default Header;
