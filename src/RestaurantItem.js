import React, {Component} from 'react';
import './css/RestaurantItem.css';

class RestaurantItem extends Component {

  render() {

    return (
      <div className="RestaurantItem">
        <div className="menu-item-container">
          <div className="menu-row">
            <h2>{this.props.currentRestaurant.summary.name}</h2>
            <img className='place-logo' src={this.props.currentRestaurant.summary.merchant_logo} alt="logo"/>
          </div>
          <div className="menu-row-alt">
            <p>{this.props.currentRestaurant.summary.phone}</p>
          </div>
          <div className="menu-row-alt">
            <p><strong>Category:</strong> {this.props.currentRestaurant.summary.cuisines[0]}</p>
            <p><strong>Reviews:</strong> {this.props.currentRestaurant.yelp_info.rating.review_count}</p>
            <img className='yelp-logo' src={this.props.currentRestaurant.yelp_info.rating.rating_img_url_small} alt="logo"/>
          </div>
          <div className="menu-row-alt">
            <p>Location: {this.props.currentRestaurant.location.street}</p>
            <p>{this.props.currentRestaurant.location.city}, {this.props.currentRestaurant.location.state} {this.props.currentRestaurant.location.zip}</p>
          </div>
          <div className="menu-row-alt">
            <p><strong>Landmark:</strong> {this.props.currentRestaurant.location.landmark}</p>
          </div>

        </div>
      </div>
    );
  }
}

export default RestaurantItem;
