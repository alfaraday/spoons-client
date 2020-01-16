import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import RecipePage from './RecipePage/RecipePage'
import LandingPage from './LandingPage/LandingPage'
import ResultsPage from './ResultsPage/ResultsPage'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
          <Route 
            exact path='/'
            component={LandingPage}
          />
          <Route 
            path='/results'
            component={ResultsPage}
          />
          <Route 
            path='/recipes/:recipeId' 
            component={RecipePage} 
          />
      </div>
    )
  }
}
