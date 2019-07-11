import React, { Component } from 'react';
import moment from "moment";
export default class App extends Component {
  render() {
    return (
      // npm list -g --depth=0
      <div className='app'>
        <h1>Bro you cool ya dum</h1>
      <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
     
      </div>
    );
  }
}
