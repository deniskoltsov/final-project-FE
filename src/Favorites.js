import React, {Component} from 'react';
import util from './utils/helpers.js';
import './css/Favorites.css';

class Favorites extends Component {

  onClickDelete(event){
    event.preventDefault()
    util.deleteFav(event.target.value).then((response) => {
      console.log('deleted:', response);
    });
  }

  render() {
    const favArr = this.props.userFavorites

    return (
      <div className="favorites-container">

        {favArr.map((item, i) => {
          return<div className='fav-item' key={i}>
            <div className='fav-row'><h6>{item.restaurantname}</h6></div>
            <div className='fav-row'>
              <div className="item-phone"><p>{item.phone}</p></div></div>
            <div className='fav-row'>
              <div className='item-address'><p>{item.street} {item.city} {item.state} {item.zip}</p></div>
            </div>
            <div className='fav-row'>
              <div className='item-name'><p>{item.itemname}</p></div>
              <div className='item-price'><p>{item.price}</p></div>
            </div>
            <br></br>
            <button className='fav-button submit-button btn-flat' value={item.itemname} onClick={(event) => this.onClickDelete(event)}>Delete</button>
          </div>
        })}
      </div>
    );
  }
}

export default Favorites;
