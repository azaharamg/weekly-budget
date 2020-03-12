import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ storeBudget, storeRemaining, updateQuestion }) => {
  const [amount, storeAmount] = useState(0);
  const [error, storeError] = useState(false);

  const userBudget = e => {
    storeAmount(parseInt(e.target.value, 10));
  };

  const addBudget = e => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount)) {
      storeError(true);
      return;
    }
    storeError(false);
    storeBudget(amount);
    storeRemaining(amount);
    updateQuestion(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message='El Presupuesto es Incorrecto' /> : null}
      <form onSubmit={addBudget}>
        <input type='number' className='u-full-width' placeholder='Coloca tu presupuesto' onChange={userBudget} />
        <input type='submit' className='button-primary u-full-width' value='Definir presupuesto' />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  storeBudget: PropTypes.func.isRequired,
  storeRemaining: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired
};

export default Question;
