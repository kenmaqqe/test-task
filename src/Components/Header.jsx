import React from "react";
import Logo from "../assets/Logo.svg";
import AccountImg from "../assets/Account.svg";
import LogOutImg from "../assets/Logout.svg";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo-img" />
      </div>
      <div className={styles.account}>
        <span className={styles.accountInfo}>
          <img src={AccountImg} alt="account-img" />
          <p>mike-dawson@gmail.com</p>
        </span>
        <span className={styles.logOut}>
          <img src={LogOutImg} alt="logout-img" />
          <p>Sign out</p>
        </span>
      </div>
    </header>
  );
};

export default Header;
