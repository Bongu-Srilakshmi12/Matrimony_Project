import React from "react";
import "./Bysearch.css";

function Bysearch() {
  return (
    <div className="by-search">
      <div className="by-search-heading">
        <h4>Your Saved Searches</h4>
        <span className="by-spam">
          No saved searches yet. Click below to create your search criteria
        </span> <br />
        <button>Go to Search</button>
      </div>
    </div>
  );
}

export default Bysearch;
