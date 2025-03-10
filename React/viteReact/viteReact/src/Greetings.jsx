import React from 'react';

const Greetings = ({ render }) => {
  const arr = ["Yug", "Om", "Ananya"];
  return (
    <div>
      <h2>{render(arr)}</h2>
    </div>
  );
};

export default Greetings;
