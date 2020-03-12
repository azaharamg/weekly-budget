import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import Budget from './components/Budget';

function App() {
  const [budget, storeBudget] = useState(0);
  const [remaining, storeRemaining] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, storeExpenses] = useState([]);
  const [expense, storeExpense] = useState({});
  const [addExpense, storeAddExpense] = useState(false);

  useEffect(() => {
    if (addExpense) {
      storeExpenses([...expenses, expense]);

      const budgetRemaining = remaining - expense.amount;
      storeRemaining(budgetRemaining);
    }
  }, [expense]);

  return (
    <div className='container'>
      <h1>Gasto semanal</h1>
      <div className='contenido-principal contenido'>
        {showQuestion ? (
          <Question storeBudget={storeBudget} storeRemaining={storeRemaining} updateQuestion={updateQuestion} />
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <Form storeExpense={storeExpense} storeAddExpense={storeAddExpense} />
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
