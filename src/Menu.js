import React, {Component} from 'react';
import RestaurantItem from './RestaurantItem.js'
import Item from './Item.js'
import util from './utils/helpers.js';
import './css/Menu.css';
import PSMarker from './Marker.js';
import GoogleMap from 'google-map-react';
import Modal from 'react-modal';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsArr: this.props.restaurantsArr,
      currentRestaurant: this.props.restaurantsArr[0],
      currentRestaurantId: this.props.restaurantsArr[0].id,
      openModal: this.props.showMenu,
      count: 1,
      lat: this.props.restaurantsArr[0].location.latitude,
      long: this.props.restaurantsArr[0].location.longitude,
      itemsArray: this.props.itemsArray,
      chosenItem: this.props.firstItem
    }
  }

  nextItem(event) {
    event.preventDefault();
    const itemsArray = [];
      for (let key in this.state.restaurantsArr[this.state.count].summary.recommended_items) {
        if(this.state.restaurantsArr[this.state.count].summary.recommended_items.hasOwnProperty(key)) {
          itemsArray.push(this.state.restaurantsArr[this.state.count].summary.recommended_items[key])
        }
      }
    this.setState({itemsArray: itemsArray});
    let randomnumber = Math.ceil(Math.random()* this.state.itemsArray.length);
    this.setState({chosenItem: itemsArray[randomnumber]})
    this.setState({currentRestaurant: this.state.restaurantsArr[this.state.count]});
    this.setState({lat: this.state.restaurantsArr[this.state.count].location.latitude});
    this.setState({long: this.state.restaurantsArr[this.state.count].location.longitude});
    this.setState({currentRestaurantId: this.state.restaurantsArr[this.state.count].id});
    this.setState({count: this.state.count + 1});
    console.log("currentRestaurant:", this.state.currentRestaurant);
    console.log("itemsArray:", this.state.itemsArray);
    console.log("chosenItem:", this.state.chosenItem);
    console.log("count:", this.state.count);
  }

  modalClose() {
    this.setState({openModal: false});
  }

  placeOrder(){
    const dataObj = {
      restaurantname: this.state.currentRestaurant.summary.name,
      street: this.state.currentRestaurant.location.street,
      city: this.state.currentRestaurant.location.city,
      state: this.state.currentRestaurant.location.state,
      zip: this.state.currentRestaurant.location.zip,
      phone: this.state.currentRestaurant.summary.phone,
      itemname: this.state.chosenItem.name,
      price: this.state.chosenItem.price,
      description: this.state.chosenItem.description,
      userid: this.props.userObj[0].id
    };
    util.saveItem(dataObj).then((response) => {
      console.log(response);
    });
  }

  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #8D5C76',
        borderRadius: '10px',
        margin: '1% !important',
        padding: '1% !important'
      }
    };
    return (
      <div className="Menu">
          <Modal isOpen={this.state.openModal} onRequestClose={this.modalClose} style={customStyles}>
            <div className="items-container">
              <div className='row'>
                <RestaurantItem currentRestaurant={this.state.currentRestaurant}/>
              </div>
              <div className='row'>
                <div className='map'>
                  <GoogleMap bootstrapURLKeys={{
                    key: "AIzaSyAIleywNgszgkPyNejpdmzXJSRnKFWpOHM"
                  }} center={{
                    lat: this.state.lat,
                    lng: this.state.long
                  }} zoom={13} yesIWantToUseGoogleMapApiInternals>
                    <PSMarker lat={this.state.lat} lng={this.state.long}/>
                  </GoogleMap>
                </div>
              </div>
              <div className='row'>
                <Item chosenItem={this.state.chosenItem}/>
              </div>
              <div className='row'>
              <button className='submit-button btn-flat' onClick={(event) => this.placeOrder(event)}>Oh Yea</button>
              </div>
              <div className='row'>
              <button className='submit-button btn-flat' onClick={(event) => this.nextItem(event)}>Next Item</button>
              <button className='submit-button btn-flat' onClick={(event) => this.modalClose(event)}>x</button>
              </div>
            </div>
          </Modal>
      </div>
    );
  }
}

export default Menu;
