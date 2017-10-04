import React from 'react';

export default class LandingPage extends React.Component {
  constructor(props){
      super(props);
  }
  render () {
    return (
      <div className='fluid-container'>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        
        <a className="navbar-brand" href="#">Navbar</a>
          <div className='text-right pull-right'>
              <a className="nav-link d-inline-block pull-right" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-link d-inline-block pull-right" href="#">Link</a>
              <a className="nav-link d-inline-block pull-right disabled" href="#">Disabled</a>
          </div>
          <a className="nav-link d-block pull-right" href="#">Home <span className="sr-only">(current)</span></a>
      </nav>
    </div>
    )
  }
}