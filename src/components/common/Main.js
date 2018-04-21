import React, { Component } from 'react';
import DataInfo from './../data/DataInfo';
import DataParser from './../data/DataParser';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    handleUpload = (data) => {
        this.setState({
            data
        });
    }

    render() {
        const isDataUploaded = this.state.data.length;

        return(
            <div>
                {isDataUploaded ? (
                    <DataInfo entries={this.state.data} />
                ) : (
                    <DataParser onUploadFile={this.handleUpload} />
                )}
            </div>
        );

    }
}

export default Main;
