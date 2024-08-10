"use client";

import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${styles.link} ${
        pathname.startsWith("/community") ? styles.active : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
