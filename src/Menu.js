import React, {Component} from 'react';
import util from './utils/helpers.js';
import './css/Menu.css';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menuResponse: {}
    }
  }

  componentDidMount() {
  }

  onClickSearch(event) {
  event.preventDefault();
    const name = 'tacos';
    util.getMenu(name).then((response) => {
      this.setState({menuResponse: response.data.objects});
      console.log('response:', this.state.menuResponse);
    });
  }

  render() {
    return (
      <div className="Menu">
        <button className='submit-button btn-flat' onClick={(event) => this.onClickSearch(event)}>Search
        </button>

        <h5>{this.props.username}</h5>
      </div>
    );
  }
}

export default Menu;
