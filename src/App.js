import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
const api_key = "ecdcfaface86216d574a68c8d7711d35";
const hidden_api_key = process.env.api_key;


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
