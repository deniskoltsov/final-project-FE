import React, {Component} from 'react';
import './css/Item.css';

class Item extends Component {

  render() {
    console.log('this.props.chosenItem:', this.props.chosenItem);

    return (
      <div className="Item">
        <div className="menu-item-container">
          <div className="menu-row">
            <h2>{this.props.chosenItem.name}</h2>
          </div>
          <div className="menu-row">
            <h3><strong>Price: </strong>{this.props.chosenItem.price}</h3>
          </div>
          <div className="menu-row-alt-description">
            <p>Description: {this.props.chosenItem.description}</p>
          </div>
          <div className="menu-row-alt">
            <p>Rating: {this.props.chosenItem.rating}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
