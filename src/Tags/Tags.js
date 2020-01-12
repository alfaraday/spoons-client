import React, { Component } from 'react';

export default class Tags extends Component {
  render() {
    // replace with most frequently used tags
    const tags = [`dinner`, `breakfast`, `easy`]

    const tagLis = tags.map( tag => <li>{tag}</li>)

    return (
      <div>
        <ul>
          {tagLis}
        </ul>
      </div>
    )
  }
}