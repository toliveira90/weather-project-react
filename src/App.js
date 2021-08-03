import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App container">
      <div className="card">
        <header className="App-header">
          <Weather />
        </header>
      </div>
    </div>
  );
}