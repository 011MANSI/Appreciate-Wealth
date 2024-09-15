// src/Translator.js
import React, { useState } from 'react';

function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // For simplicity, we'll "translate" English to a dummy language (just reverse the string)
    setTranslatedText(inputText.split('').reverse().join(''));
  };

  return (
    <div>
      <h1>Fruit Translator</h1>
      <input
        type="text"
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && (
        <div className="translated-text">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default Translator;
