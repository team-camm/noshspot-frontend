import React from 'react';
import NavBar from '../NavBar/NavBar';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <div id="marketingHolder">
          <h3 id="marketingText"> Nosh, eat food enthusiastically or greedily. </h3>
        </div>
      </div>
    )
  }
}