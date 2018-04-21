import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import { csvJSON } from "./../../helpers";
import "./DataParser.css";

class File extends Component {
  updateData(result) {
    this.props.onUploadFile(result);
  }

  handleFiles = files => {
    const reader = new FileReader();

    reader.onload = e => {
      const dataJSON = csvJSON(reader.result);
      this.updateData(dataJSON);
    };

    reader.readAsText(files[0]);
  };

  render() {
    return (
      <div className="DataParser">
        <h3>
          As a user of Zero, a fasting tracker used for intermittent, circadian
          rhythm, and custom fasting,
        </h3>
        <h3>
          I wanted to make use of my exported data. To get started please upload
          your <code>.CSV</code> file.
        </h3>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={".csv"}>
          <button className="btn">Upload</button>
        </ReactFileReader>
      </div>
    );
  }
}

export default File;
