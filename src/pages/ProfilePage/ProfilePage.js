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

  render() {
    return (
      <>
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
              <p>{this.state.profileDetails.email}</p>
              <p>{this.state.profileDetails.website}</p>
            </div>
          </div>
        </div>
        <Button buttonText="Go Back to Users" />
      </>
    );
  }
}

export default ProfilePage;
