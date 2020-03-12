import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {
  const [budget, storeBudget] = useState(0);
  const [remaining, storeRemaining] = useState(0);
  return (
    <div className='container'>
      <h1>Gasto semanal</h1>
      <div className='contenido-principal contenido'>
        <Question storeBudget={storeBudget} storeRemaining={storeRemaining} />
        <div className='row'>
          <div className='one-half column'>
            <Form />
          </div>
          <div className='one-half column'>2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
