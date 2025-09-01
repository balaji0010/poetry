import React, { useState, useEffect } from "react";
import "./css/CardGrid.css";
import "./css/component.css";
import profilePic from "../assets/ba.jpg";

const Kavidhaicard = () => {
  const [poems, setPoems] = useState([]);
  const [selectedText, setSelectedText] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/poems.json")
      .then((res) => res.json())
      .then((data) => {
        setPoems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading poems:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading poems...</p>;

  return (
    <div>
      <div className="card-grid">
        {poems.map((poem) => (
          <div
            key={poem.id}
            className="card"
            onClick={() => setSelectedText(poem.text)}
          >
            <p>{poem.text}</p>
          </div>
        ))}
      </div>

      {selectedText && (
        <div className="modal-overlay" onClick={() => setSelectedText(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={profilePic} alt="profile" className="profile-avatar" />
            <span className="close" onClick={() => setSelectedText(null)}>
              ✕
            </span>
            <p>{selectedText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kavidhaicard;
