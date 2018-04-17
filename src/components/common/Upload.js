import React from "react";
import DataParser from "./../data/DataParser";
import './Upload.css';

const Upload = () => {
  return (
    <div className="Upload">
      <h3>
        As a user of Zero, a fasting tracker used for intermittent, circadian
        rhythm, and custom fasting, 
      </h3>
      <h3>
        I wanted to make use of my exported data. To get started please upload your <code>.CSV</code> file.
      </h3>

      <DataParser />
    </div>
  );
};

export default Upload;
