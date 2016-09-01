import React, { Component } from 'react';
import Menu from './Menu.js';
import util from './utils/helpers.js';
import './css/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsArr: [],
      showMenu: false,
      firstRestaurant: '',
      firstItemsArray: [],
      firstItem: {}
    }
  }

  getRestaurantsClick() {
    this.setState({showMenu: false})
    const dataObj = {
      address: this.props.userObj[0].address,
      zipcode: this.props.userObj[0].zipcode
    };
    util.getRestaurants(dataObj).then((response) => {
      const merchants = response.data.merchants
      const resultArr = []
        for(let i = 0; i < 25; i++){
          let randomnumber=Math.ceil(Math.random()* merchants.length);
            if (merchants[randomnumber]) {
            resultArr.push(merchants[randomnumber])
          }
         }
      this.setState({restaurantsArr: resultArr});
      // console.log('RANDOM RESTAURANTS:', this.state.restaurantsArr);
      this.setState({firstRestaurant: this.state.restaurantsArr[0]})
      // console.log('1 firstRestaurant:', this.state.restaurantsArr[0]);
      const reco = this.state.firstRestaurant.summary.recommended_items
      // console.log('2 RECO:', reco);
      const firstItemsArray = [];
        for (let key in reco) {
          if (reco.hasOwnProperty(key)) {
            firstItemsArray.push(reco[key])
          }
        }
        this.setState({firstItemsArray: firstItemsArray})
        // console.log('3 firstItemsArray:', firstItemsArray);
        let randomnumber = Math.ceil(Math.random()* firstItemsArray.length);
        this.setState({firstItem: firstItemsArray[randomnumber]})
        // console.log('4 FIRST ITEM:', this.state.firstItem);
        this.setState({showMenu: true})
    });
  }


  render() {

    return (
      <div className="Main">
        <div className='main-container'>
          <div className='message'>
            <h2>Press the 'Find it' Button to get a randomly selected meal close to you.</h2>
            <h5>Then when you got what you're looking for add it and that's it. Or you can press 'Next Item' until you get something that tickles your fancy.</h5>
          </div>
          {this.state.showMenu ? <Menu restaurantsArr={this.state.restaurantsArr} userObj={this.props.userObj} firstItem={this.state.firstItem} firstRestaurant={this.state.firstRestaurant} itemsArray={this.state.firstItemsArray} showMenu={this.state.showMenu}/> : null}

          <button className='submit-button btn-flat' onClick={(event) => this.getRestaurantsClick(event)}>Find it</button>
          <h5>{this.props.address}</h5>
        </div>
      </div>
    );
  }
}

export default Main;
