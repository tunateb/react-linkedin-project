import React from "react";
import styles from "./ProfilePage.module.scss";
import Button from "../../components/Button/Button";

class ProfilePage extends React.Component {
  state = {
    profileDetails: {},
  };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const pathname = this.props.history.location.pathname;
    const response = await fetch(`${baseUrl}${pathname}`);
    const data = await response.json();

    this.setState({ profileDetails: data }, () => {
      console.log(this.state.profileDetails);
    });
  };

  goTodos = () => {
    const pathname = this.props.history.location.pathname;
    this.props.history.push(`${pathname}/todos`);
  };

  goPosts = () => {
    const pathname = this.props.history.location.pathname;
    this.props.history.push(`${pathname}/posts`);
  };

  render() {
    return (
      <div className={styles.content}>
        <section className={styles.profileSection}>
          <div className={styles.profileContainer}>
            <div>
              <img
                src="https://antmakend.com/wp-content/uploads/2019/02/background-1.jpg"
                className={styles.headerImg}
                alt="header"
              />
            </div>

            <div className={styles.profileWrapper}>
              <img
                className={styles.profileAvatar}
                src="https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg"
                alt="avatar"
              />
              <div className={styles.profileInfo}>
                <h3>{this.state.profileDetails.name}</h3>
                <p>E-mail: {this.state.profileDetails.email}</p>
                <p>Website: {this.state.profileDetails.website}</p>

                <Button buttonText="TODOS" onBtnClick={this.goTodos} />
                <Button
                  buttonText="POSTS"
                  onBtnClick={this.goPosts}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sideContent}>
          <div className={styles.dashboard}>
            <div className={styles.dashTitle}>
              <p>YOUR DASHBOARD</p>

              <a href="#">GO TO STATS</a>
            </div>

            <p className={styles.dashCount}>
              {Math.floor(Math.random() * 1000)}
            </p>
            <p className={styles.dashText}>views today</p>
            <p className={styles.dashCount}>
              {Math.floor(Math.random() * 100)}
            </p>
            <p className={styles.dashText}>post views</p>
            <p className={styles.dashCount}>
              {Math.floor(Math.random() * 100)}
            </p>
            <p className={styles.dashText}>search apperances</p>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfilePage;
