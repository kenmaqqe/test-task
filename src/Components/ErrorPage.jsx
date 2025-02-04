import React from "react";
import styles from "../styles/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <section className={styles.errorPage}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Page not found</p>
    </section>
  );
};

export default ErrorPage;
