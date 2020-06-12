import React from "react";
import styles from "./ListLayout.module.scss";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

class ListLayout extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const response = await fetch(`${baseUrl}/users`);
    const data = await response.json();

    console.log(data);
    this.setState({ list: data });
  };

  goToProfile = (id) => {
    console.log(id);
    this.props.history.push(id);
    console.log(this.props.history);
  };

  render() {
    return (
      <div className={styles.gridContainer}>
        {this.state.list.map((item, index) => (
          <ProfileCard
            key={index}
            imgSrc={`https://unsplash.it/200/20${index}`}
            imgAlt="avatar"
            userName={item.name}
            userEmail={item.email}
            onBtnClick={() => {
              this.goToProfile(item.id);
            }}
          />
        ))}
      </div>
    );
  }
}

export default ListLayout;
