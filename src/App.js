import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";


import UsersPage from "../src/pages/UsersPage/UsersPage";
import HomePage from "../src/pages/HomePage/HomePage";
import PostsPage from "../src/pages/PostsPage/PostsPage";
import TodosPage from "../src/pages/TodosPage/TodosPage";
import ProfilePage from "../src/pages/ProfilePage/ProfilePage";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";

function App() {
  return (
    <Router>
      
        <BaseLayout>
          <Switch>
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/users/:id/posts" component={PostsPage} />
            <Route path="/users/:id/todos" component={TodosPage} />
            <Route path="/users/:id" component={ProfilePage} />
          </Switch>
        </BaseLayout>
      
    </Router>
  );
}

export default App;
