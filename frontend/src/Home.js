// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing CSS

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Fruit.ai</h1>
      <div className="services">
        <Link to="/chatbot">
          <div className="service-card">
            <h2>Chatbot</h2>
          </div>
        </Link>
        <Link to="/translator">
          <div className="service-card">
            <h2>Translator</h2>
          </div>
        </Link>
        <Link to="/faq">
          <div className="service-card">
            <h2>FAQ</h2>
          </div>
        </Link>
        <Link to="/about">
          <div className="service-card">
            <h2>About</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
