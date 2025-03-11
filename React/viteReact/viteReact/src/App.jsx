import React from 'react';
import Greetings from './Greetings';
import Border from './Border';

function App() {
  return (
    <div>
      <Greetings render={(arr) => arr.map((name, index) => <span key={index}> Hi {name}<br></br></span>)} />
      <Border>
        <Greetings render={(arr) => arr.map((name, index) => <span key={index}> Hi {name}<br></br></span>)} />
      </Border>
    </div>
  );
}

export default App;
