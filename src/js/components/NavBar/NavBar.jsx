import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div id='navDiv'>
          <nav className='mainBar clearfix'>
            <a id='logo' href='#'>Logo</a>
            <a id='title' href='#'><strong>NoshSpot</strong></a>
            <a id='login' href='#'>Login</a>
          </nav>
          <div id='spacer'></div>
        </div>
      )
    }
  }