import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import SearchBox from '../SearchBox/SearchBox'
import Tags from '../Tags/Tags'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main>
          <div>
            <h1>SPOONS</h1>
            <p>Trouble deciding what to eat? Save your spoons for bigger problems! Collect all your favorite recipes here and never struggle over food decisions again.</p>
          </div>
          <SearchBox />
          <Tags />
        </main>
      </div>
    )
  }
}