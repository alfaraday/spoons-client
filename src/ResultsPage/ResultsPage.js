import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import SearchBox from '../SearchBox/SearchBox';
import Tags from '../Tags/Tags';

export default class ResultsPage extends Component {
  render() {
    const searchValue = ``;

    const recipeLis = ``;

    return (
      <div>
        <Nav />
        <main>
          <h1> Results for {searchValue}</h1>
          <SearchBox />
          <div>
            <ul>
              {recipeLis}
            </ul>
          </div>
        </main>
      </div>
    )
  }
}