import React, {Component} from 'react';
import './css/Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsArr: [],
      currentRestaurant: {},
      count: 1
    }
  }
  componentWillMount(){
    this.setState({restaurantsArr: this.props.restaurantsArr})
    this.setState({currentRestaurant: this.props.restaurantsArr[0]})
  }
  nextItem(event){
    event.preventDefault();
    this.setState({currentRestaurant: this.state.restaurantsArr[this.state.count]})
    this.setState({count: this.state.count + 1})
    console.log("count:", this.state.count);
  }

  render() {
    console.log("restaurantsArr:", this.state.restaurantsArr);
    console.log("currentRestaurant:", this.state.currentRestaurant);
    console.log("userObject:", this.props.userObj);

    return (
      <div className="Menu">
        <div className="menu-item-container">
        <p></p>
        <p>{this.state.currentRestaurant.summary.cuisines[0]}</p>
        <button className='submit-button btn-flat' onClick={(event) => this.nextItem(event)}>Next Item</button>

        </div>
      </div>
    );
  }
}

export default Menu;
