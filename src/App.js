import React from "react";
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import { getAllCategories } from "./actions/categories";

import "./App.scss";
import Layout from "./components/layout";
import jokeList from "./components/jokeList";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="App">
        <Layout>
          {/* <Route exact path="/" component={jokeList} /> */}
          <Route exact path="/jokes/:category" component={jokeList} />
          {/* <Route exact path="/joke" component={JokeDetail} /> */}
        </Layout>
      </div>
    );
  }
}

export default withRouter(
  connect(
    undefined,
    { fetchCategories: getAllCategories }
  )(App)
);
