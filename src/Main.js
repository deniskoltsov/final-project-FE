import React, { Component } from 'react';
import Menu from './Menu.js';
import util from './utils/helpers.js';
import './css/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsArr: []
    }
  }

  getRestaurantsClick() {
    this.setState({userSignedIn: true});
    this.setState({showResults: false});
    const dataObj = {
      address: this.props.address,
      zipcode: this.props.zipcode
    };
    util.getRestaurants(dataObj).then((response) => {
      const merchants = response.data.merchants
      const resultArr = []
        for(var i = 0; i < 25; i++){
          let randomnumber=Math.ceil(Math.random()* merchants.length);
          resultArr.push(merchants[randomnumber])
         }
      this.setState({restaurantsArr: resultArr});
      console.log('RANDOM RESTAURANTS:', this.state.restaurantsArr);
    });
  }


  render() {
    return (
      <div className="Main">
        <div className='main-container'>
          <div className='filter-options'></div>
          <Menu />
          <button className='submit-button btn-flat' onClick={(event) => this.getRestaurantsClick(event)}>Find it</button>
          <h5>{this.props.address}</h5>
        </div>
      </div>
    );
  }
}

export default Main;
