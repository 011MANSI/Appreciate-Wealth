// src/Chatbot.js
import React, { useState } from 'react';

function Chatbot() {
  const fruits = [
    { name: 'Apple', description: 'An apple is sweet and crunchy.' },
    { name: 'Banana', description: 'A banana is soft and creamy.' },
    { name: 'Orange', description: 'An orange is juicy and tangy.' }
  ];

  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div>
      <h1>Fruit Chatbot</h1>
      <div className="fruit-cards">
        {fruits.map((fruit, index) => (
          <div key={index} className="fruit-card" onClick={() => handleFruitClick(fruit)}>
            <h2>{fruit.name}</h2>
          </div>
        ))}
      </div>
      {selectedFruit && (
        <div className="fruit-details">
          <h2>{selectedFruit.name}</h2>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
