import React, { Fragment } from 'react';

const Budget = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className='alert alert-primary'>Presupuesto:{budget} &euro;</div>
      <div className='alert'>Restante: {remaining} &euro;</div>
    </Fragment>
  );
};

export default Budget;
