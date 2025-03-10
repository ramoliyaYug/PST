import React from 'react';
import Greetings from './Greetings';

function App() {
  return (
    <div>
      <Greetings render={(arr) => arr.map((name, index) => <span key={index}> Hi {name}<br></br></span>)} />
    </div>
  );
}

export default App;
