// src/Faq.js
import React, { useState, useEffect } from 'react';

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  useEffect(() => {
    fetch('/faqs')
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  const handleCreateFaq = () => {
    fetch('/faqs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFaq),
    })
      .then((res) => res.json())
      .then((data) => setFaqs([...faqs, data]));
  };

  const handleDeleteFaq = (id) => {
    fetch(`/faqs/${id}`, {
      method: 'DELETE',
    }).then(() => setFaqs(faqs.filter((faq) => faq._id !== id)));
  };

  return (
    <div>
      <h1>FAQs</h1>
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <strong>{faq.question}</strong>: {faq.answer}
            <button onClick={() => handleDeleteFaq(faq._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Create a new FAQ</h3>
      <input
        type="text"
        placeholder="Question"
        value={newFaq.question}
        onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
      />
      <input
        type="text"
        placeholder="Answer"
        value={newFaq.answer}
        onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
      />
      <button onClick={handleCreateFaq}>Create</button>
    </div>
  );
}

export default Faq;
