import React from 'react';

import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)  // as object {salad: <int>, ...} => <li>Salad: 1</li>
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });
  
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to check out?</p>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINE</Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    </Aux>
  );
};

export default orderSummary;