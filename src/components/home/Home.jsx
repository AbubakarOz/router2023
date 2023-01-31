import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.coverHeading}>Cover your page.</h1>
          <p className={styles.lead}>
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p className={styles.learn}>
            <Link to="/more" className={styles.learnMore}>
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
