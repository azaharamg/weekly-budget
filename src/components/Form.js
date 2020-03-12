import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ addNewExpense }) => {
  const [name, storeName] = useState('');
  const [amount, storeAmount] = useState(0);
  const [error, storeError] = useState(false);

  const addBudget = e => {
    e.preventDefault();
    if (amount < 1 || isNaN(amount) || name.trim() === '') {
      storeError(true);
      return;
    }
    storeError(false);

    const expense = {
      name,
      amount,
      id: shortid.generate()
    };

    addNewExpense(expense);
  };

  return (
    <form onSubmit={addBudget}>
      <h2>Agrega tus gatos aquí</h2>
      {error ? <Error message='Ambos campos son obligatorios o Presupuesto Incorrecto' /> : null}
      <div className='campo'>
        <label>Nombre Gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ej. Transporte'
          value={name}
          onChange={e => storeName(e.target.value)}
        />
      </div>
      <div className='campo'>
        <label>Cantidad Gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='Ej. 300'
          value={amount}
          onChange={e => storeAmount(parseInt(e.target.value))}
        />
      </div>
      <input type='submit' className='button-primary u-full-width' value='Agregar gasto' />
    </form>
  );
};

export default Form;
