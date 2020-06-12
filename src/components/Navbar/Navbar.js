import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <div className={styles.logoWrapper}>
          <img
            src={require("../../img/logo.png")}
            className={styles.logo}
            alt="logo"
          />
        </div>
        <div className={styles.navItemWrapper}>
          <i className="fas fa-rss fa-2x"></i>
          <a href="#" className={styles.navItem}>
            FEED
          </a>
        </div>
        <div className={styles.navItemWrapper}>
          <i className="fas fa-user-friends fa-2x"></i>
          <a href="#" className={styles.navItem}>
            NETWORK
          </a>
        </div>
        <div className={styles.navItemWrapper}>
          <i className="fas fa-suitcase fa-2x"></i>
          <a href="#" className={styles.navItem}>
            JOBS
          </a>
        </div>
        <div className={styles.navItemWrapper}>
          <i className="far fa-comment-alt fa-2x"></i>
          <a href="#" className={styles.navItem}>
            CHAT
          </a>
        </div>
        <div className={styles.navItemWrapper}>
          <i className="far fa-bell fa-2x"></i>
          <a href="#" className={styles.navItem}>
            NOTICES
          </a>
        </div>
      </div>
      <div className={styles.searchBarWrapper}>
        <i className="fas fa-search fa-2x" style={{ color: "#0275B1" }}></i>
        <input type="text" placeholder="Search" className={styles.searchBar} />
      </div>
      <div className={styles.profileOwner}>
        <div className={styles.navAvatarWrapper}>
          <img
            src="https://unsplash.it/200/200"
            alt="avatar"
            className={styles.navAvatar}
          />
        </div>
        <div>
          <div>
            <h3 className={styles.navProfileName}>User Name</h3>
            <span className={styles.navProfileNameSpan}>YOU</span>
          </div>
          <div>
            <p className={styles.navProfileViewCount}>
              367 views today<strong>+32</strong>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.navSubmenu}>
        <i className="fas fa-ellipsis-h fa-lg"></i>
        <h4 className={styles.navSubmenuTitle}>OTHER</h4>
      </div>
    </nav>
  );
};

export default Navbar;
