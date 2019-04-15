import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { RESET_FIELDS, REMOVE_RECIPE } from "../../store";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes
    };
  }

  clearForm = () => {
    store.dispatch({
      type: RESET_FIELDS
    });
  };

  removeRecipe = id => {
    store.dispatch({
      type: REMOVE_RECIPE,
      payload: recipe.id
    });
  };

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          id={recipe.id}
          remove={this.removeRecipe}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button onClick={() => this.clearForm()}>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
