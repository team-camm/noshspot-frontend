import React from 'react';
import NavBar from '../NavBar/NavBar';

export default class Confirmation extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <NavBar />
            <div style={{ 'height': '68px'}}></div>
            <div >
                <h2 > Thank You! </h2>
                <p> Your payment has been recieved successfully! </p>
            </div>
        </div>
      )
    }
}
