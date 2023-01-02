import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {
  handleSearchbarSubmit(query) {
    console.log("trying to handle submit form query", query);
    this.props.history.push("/results");
  }

  render() {
    return (
      <div className="app">
        <Logo />
        <SearchBar onSubmit={(query) => this.handleSearchbarSubmit(query)} />
        <RecentPosts />
      </div>
    );
  }
}
