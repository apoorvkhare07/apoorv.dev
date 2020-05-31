import React, { Component } from 'react';
import Pdf from './Docs/dev_cv.pdf';

class Download extends Component {

  render() {

    return (
      <div>
        <a href = {Pdf} target = "_blank">Download Pdf</a>
      </div>
    );
  }
}

export default Download;