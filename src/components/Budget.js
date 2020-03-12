import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';

const Budget = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className='alert alert-primary'>Presupuesto:{budget} &euro;</div>
      <div className={checkBudget(budget, remaining)}>Restante: {remaining} &euro;</div>
    </Fragment>
  );
};

export default Budget;
