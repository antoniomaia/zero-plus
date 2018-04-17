import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import { csvJSON } from "./../../helpers";

class File extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  updateData(result) {
    this.setState({ data: result });
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
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={".csv"}>
          <button className="btn">Upload</button>
        </ReactFileReader>
      </div>
    );
  }
}

export default File;
