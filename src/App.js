import React from 'react';
import Question from './components/Question';

function App() {
  return (
    <div className='container'>
      <h1>Gasto semanal</h1>
      <div className='contenido-principal contenido'>
        <Question />
      </div>
    </div>
  );
}

export default App;
