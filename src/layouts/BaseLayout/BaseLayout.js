import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./BaseLayout.module.scss";
import Footer from "../../components/Footer/Footer";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
