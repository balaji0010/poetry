import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

const Toggle = ({ theme, toggleTheme }) => {

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default Toggle