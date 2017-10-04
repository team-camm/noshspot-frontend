import React from 'react';
import LandingPage from './components/LandingPage/LandingPage'

export default class App extends React.Component {
  constructor(){
    super();
  }

  render() {
      return(
        <div>
            <LandingPage />
        </div>
      )
  }
}