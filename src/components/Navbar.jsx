import React, { useState } from "react";

const Navbar = ({ setRegion }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (region) => {
    setActiveFilter(region);
    setRegion(region); // Update parent component with selected region
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container navbar-container">
        {/* Title on the left */}
        <h2 className="navbar-title">Countries</h2>

        {/* Filter options on the right */}
        <div className="nav-filters">
          {["All", "Asia", "Europe"].map((region) => (
            <label
              key={region}
              className={`nav-label ${activeFilter === region ? "active" : ""}`}
              onClick={() => handleFilterClick(region)}
            >
              {region}
            </label>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
