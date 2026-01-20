import React from 'react';
import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Kavidhaicard from './components/Kavidhaicard';

function App() {
  // Default to 'dark' logic matches CSS :root default
  const [theme, setTheme] = useState(localStorage.getItem('kavidhai-theme') || 'dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kavidhai-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Kavidhaicard />
    </div>
  );
}

export default App
