import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import recipes from '../DATA'

export default class RecipePage extends Component {
  render() {
    // replace with API call
    const recipe = recipes[0];

    const ingredients = recipe.ingredients.map( ingredient => {
      return <li>{ingredient.amount} {ingredient.units} {ingredient.namePrep}</li>;
    } )

    const steps = recipe.steps.sort((a, b) => a.position - b.position).map( step => {
      return <li>{step.instructions}</li>;
    } )

    const tags = recipe.tags.map( tag => {
      return <li>{tag}</li>;
    } )

    return (
      <div>
      <Nav />
      <main>
        <div className='recipe-meta'>
          <h1>{recipe.name}</h1>
          <div className='time-yield'>
            <p className='time'><span className='time'>Cooking time:</span> {recipe.time}</p>
            <p className='yield'><span className='yield'>Yield:</span> {recipe.servings} servings</p>
          </div>
          {/* Add logic: if link is not null, use <a>
          else use string
          */}
          <p className='source'><span className='source'>Source:</span> <a href={recipe.source.link}>{recipe.source.text}</a></p>
        </div>
        <div className='recipe-body'>
          <div className='ingredients-list'>
            <h2>Ingredients</h2>
            <ol>
              { ingredients }
            </ol>
          </div>
          <div className='steps-list'>
            <h2>Steps</h2>
            <ol>
              { steps }
            </ol>
          </div>
          <div className='tags-notes'>
            <div className='tags'>
              <h2>Tags</h2>
              <ul>
                { tags }
              </ul>
            </div>
            <div className='notes'>
              <h2>Notes</h2>
              <p>{ recipe.notes }</p>
            </div>
          </div>
        </div>
      </main>
      </div>
    )
  }
}