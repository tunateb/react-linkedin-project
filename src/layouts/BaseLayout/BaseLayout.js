import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./BaseLayout.module.scss";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default BaseLayout;
