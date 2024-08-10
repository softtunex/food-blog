import Logo from "@/assets/logo.png";
import styles from "./main-header.module.css"; // Import the CSS module
import Image from "next/image";
import NavLink from "./nav-link";

export const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <NavLink href="/" className={styles.link}>
        <Image className={styles.logo} src={Logo} alt="logo" priority />
        <h3>My food</h3>
      </NavLink>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink href="/meals">My Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Food Communities</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
