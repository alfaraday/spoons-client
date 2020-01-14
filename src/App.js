import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import RecipePage from './RecipePage/RecipePage'
import LandingPage from './LandingPage/LandingPage'
import ResultsPage from './ResultsPage/ResultsPage'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Switch>
          <Route path='/recipes/:recipeId' component={RecipePage} />
        </Switch> */}
        <RecipePage />
      </div>
    )
  }
}
