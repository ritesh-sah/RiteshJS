

import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome to My React App</h2>
        <p>This is the main content area.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;

