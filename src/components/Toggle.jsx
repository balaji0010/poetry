import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

const Toggle =()=>{

    const [darkMode, setDarkMode] = useState(true);
    return(
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
    );
};

export default Toggle