import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import Budget from './components/Budget';

function App() {
  const [budget, storeBudget] = useState(0);
  const [remaining, storeRemaining] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, storeExpense] = useState([]);

  const addNewExpense = expense => {
    storeExpense([...expenses, expense]);
  };

  return (
    <div className='container'>
      <h1>Gasto semanal</h1>
      <div className='contenido-principal contenido'>
        {showQuestion ? (
          <Question storeBudget={storeBudget} storeRemaining={storeRemaining} updateQuestion={updateQuestion} />
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <Form addNewExpense={addNewExpense} />
            </div>
            <div className='one-half column'>
              <List expenses={expenses} />
              <Budget budget={budget} remaining={remaining} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
