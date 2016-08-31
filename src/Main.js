import React, { Component } from 'react';
import Menu from './Menu.js';
import util from './utils/helpers.js';
import './css/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsArr: [],
      showMenu: false
    }
  }

  getRestaurantsClick() {
    const dataObj = {
      address: this.props.userObj[0].address,
      zipcode: this.props.userObj[0].zipcode
    };
    util.getRestaurants(dataObj).then((response) => {
      const merchants = response.data.merchants
      const resultArr = []
        for(var i = 0; i < 25; i++){
          let randomnumber=Math.ceil(Math.random()* merchants.length);
            if (merchants[randomnumber]) {
            resultArr.push(merchants[randomnumber])
          }
         }
      this.setState({restaurantsArr: resultArr});
      console.log('RANDOM RESTAURANTS:', this.state.restaurantsArr);
      this.setState({showMenu: true})
    });
  }


  render() {
    return (
      <div className="Main">
        <div className='main-container'>
          <div className='filter-options'></div>
          {this.state.showMenu ? <Menu restaurantsArr={this.state.restaurantsArr} userObj={this.props.userObj}/> : null}

          <button className='submit-button btn-flat' onClick={(event) => this.getRestaurantsClick(event)}>Find it</button>
          <h5>{this.props.address}</h5>
        </div>
      </div>
    );
  }
}

export default Main;
