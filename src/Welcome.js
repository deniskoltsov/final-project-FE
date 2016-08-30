import React, {Component} from 'react';
import './css/Welcome.css';

class Welcome extends Component {

  render() {
    return (
        <div className="welcome-container">
        <h2>Welcome to <span>FoodLib</span></h2>
        <div className='subhead'><h5>The one and only place to fulfill your spontaneous food cravings.</h5></div>
        </div>
    );
  }
}

export default Welcome;
