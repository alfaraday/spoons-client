import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import RecipePage from './RecipePage/RecipePage'
import LandingPage from './LandingPage/LandingPage'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Switch>
          <Route path='/recipes/:recipeId' component={RecipePage} />
        </Switch> */}
        <LandingPage />
      </div>
    )
  }
}
