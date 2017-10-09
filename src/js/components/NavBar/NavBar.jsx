import React from 'react';
import {
  Link
} from 'react-router-dom';

export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div id='navDiv'>
          <nav className='mainBar clearfix'>
            <div id='logo' href='#'>Logo</div>
            <Link to='/'><div id='title' href='#'><strong>NoshSpot</strong></div></Link>
            <Link to='/registration'><div id='login' >Login</div></Link>
          </nav>
          <div id='spacer'></div>
        </div>
      )
    }
  }