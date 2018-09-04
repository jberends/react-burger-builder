import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // ingredients={this.state.ingredients} 
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])]
        .map((item, index) => {
          return <BurgerIngredient type={igKey} key={`${igKey}-${index}`} />
        })
    }).reduce((arr, el) => {  // FLATTEN structured array to single array
      return arr.concat(el)
    }, []);

  console.log(transformedIngredients);

  if ( transformedIngredients.length  === 0 ) {
    transformedIngredients = <div>Please start adding ingredients</div>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;