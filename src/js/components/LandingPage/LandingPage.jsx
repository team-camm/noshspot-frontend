import React from 'react';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav className="mainBar clearfix">
          <a id="logo" href="#">Logo</a>
          <a id="title" href="#"><strong>NoshSpot</strong></a>
          <a id="login" href="#">Login</a>
        </nav>
        <main>
          <div id="inputGroup">
            <input placeholder="Enter Location..." type="text" id="locationSearch" />
            <span id="go">Go</span>
          </div>
        </main>
      </div>
    )
  }
}