import React from 'react';
import Greetings from './Greetings';
import Border from './Border';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Greetings render={(arr) => arr.map((name, index) => <span key={index}> Hi {name}<br></br></span>)} />
      <Border>
        <Greetings render={(arr) => arr.map((name, index) => <span key={index}> Hi {name}<br></br></span>)} />
      </Border>
      <Welcome name="OM"/>
      <Welcome name="YUG"/>
    </div>
  );
}

export default App;
