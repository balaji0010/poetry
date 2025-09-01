import React from 'react';
import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Kavidhaicard from './components/Kavidhaicard';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
        <Kavidhaicard />
      </div>
  );
}

export default App
