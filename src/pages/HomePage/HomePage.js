import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to Linkedin Project</h1>
      <Link to="/users">Click to get users</Link>
    </div>
  );
};

export default HomePage;
