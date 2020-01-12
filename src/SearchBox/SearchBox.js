import React, { Component } from 'react';

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search-text">Search for:</label>
          <input name="search-text" placeholder="cheese"/>
          <label htmlFor="search-category">Search in:</label>
          <select name="search-category">
            <option value="title">Titles</option>
            <option value="tag">Tags</option>
            <option value="ingredient">Ingredients</option>
            <option value="all">Entire site</option>
          </select>
          <button type="submit">Enter</button>
        </form>
      </div>
    )
  }
}