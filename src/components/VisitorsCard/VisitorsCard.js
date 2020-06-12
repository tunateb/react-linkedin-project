import React from "react";
import styles from "./VisitorsCard.module.scss";
import CardImg from "../CardImg/CardImg";

class VisitorsCard extends React.Component {
  state = {
    visitorList: [],
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const response = await fetch(`${baseUrl}/users`);
    const data = await response.json();
    console.log(data);

    this.setState({ visitorList: data });
  };

  render() {
    return (
      <div>
        <div className={styles.visitorListTitle}>
          <h4>VISITORS</h4>
          <a href="#" className={styles.visitorLink}>VIEW ALL</a>
        </div>

        <div>
          {this.state.visitorList.map((visitor, index) => (
            <div className={styles.visitorCard} key={visitor.id}>
              <div>
                <img
                  src={`https://unsplash.it/200/20${visitor.id}`}
                  alt="visitor-image"
                  className={styles.visitorImg}
                />
              </div>
              <div className={styles.visitorDetails}>
                <h3 className={styles.visitorTitle}>{visitor.name}</h3>
                <p className={styles.visitorCompany}>{visitor.company.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default VisitorsCard;
