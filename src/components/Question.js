import React, { Fragment, useState } from 'react';

const Question = () => {
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
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form onSubmit={addBudget}>
        <input type='number' className='u-full-width' placeholder='Coloca tu presupuesto' onChange={userBudget} />
        <input type='submit' className='button-primary u-full-width' value='Definir presupuesto' />
      </form>
    </Fragment>
  );
};

export default Question;
