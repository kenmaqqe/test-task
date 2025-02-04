import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  const location = useLocation();

  const navLinks = [
    {
      id: 1,
      name: "Product List",
      link: "/",
    },
    {
      id: 2,
      name: "My Account",
      link: "/my-account",
    },
  ];

  return (
    <section className={styles.menu}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.link;
            return (
              <li
                onClick={() => (window.location.href = link.link)}
                key={link.id}
                className={`${styles.navItem} ${
                  isActive ? styles.active : styles.inactive
                }`}
              >
                <NavLink to={link.link} className={styles.navLink}>
                  {link.name}
                </NavLink>
                <span>{`>`}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Menu;
