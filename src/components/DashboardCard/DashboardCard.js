import React from "react";
import styles from "./DashboardCard.module.scss";

const DashboardCard = ({ children }) => {
  return <div className={styles.dashboard}>{children}</div>;
};

export default DashboardCard;
