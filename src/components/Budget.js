import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { checkBudget } from '../helpers';

const Budget = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className='alert alert-primary'>Presupuesto:{budget} &euro;</div>
      <div className={checkBudget(budget, remaining)}>Restante: {remaining} &euro;</div>
    </Fragment>
  );
};

Budget.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};

export default Budget;
