import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import SearchBox from '../SearchBox/SearchBox';
import Tags from '../Tags/Tags';
import recipes from '../DATA';

export default class ResultsPage extends Component {
  render() {
    // grab search value from SearchBox
    const searchValue = ``;

    // replace with API response
    const recipeLis = recipes.map(recipe => {
      return (
        <li>
          <h2>{recipe.name}</h2>
          <p>Cooking time: {recipe.time}</p>
          <Tags />
        </li>
      );
    });

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