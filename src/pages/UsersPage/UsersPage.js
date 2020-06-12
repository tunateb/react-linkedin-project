import React from "react";
import ListLayout from "../../layouts/ListLayout/ListLayout";

const UsersPage = ({ history }) => {
  return (
    <ListLayout
      imgSrc="https://unsplash.it/200/200"
      imgAlt="avatar"
      history={history}
      buttonText="Go to Profile"
    />
  );
};

export default UsersPage;
