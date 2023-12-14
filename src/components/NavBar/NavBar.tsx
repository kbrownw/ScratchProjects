import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h4>Scratch Projects</h4>
      <ul>
        <Link to="/">
          <li>Grid</li>
        </Link>
        <Link to="/fizzbuzz">
          <li>FizzBuzz</li>
        </Link>
      </ul>
    </nav>
  );
};
