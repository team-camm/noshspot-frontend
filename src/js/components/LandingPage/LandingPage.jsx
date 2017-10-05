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
        <div id='marketingHolder'>
          <h3 id='marketingText'> Nosh, eat food enthusiastically or greedily. </h3>
        </div>
        <main>
          <div id='inputGroup'>
            <input placeholder='Enter Location...' type='text' id='locationSearch' />
            <span id='go'>Go</span>
          </div>
        </main>
        
      </div>
    )
  }
}