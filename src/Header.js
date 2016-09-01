import React, {Component} from 'react';
import Slider from 'react-slick';
import './css/Header.css';

class Header extends Component {

  render() {
    const sliderSettings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      adaptiveHeight: true
      // className: ''
      // fade: true
    };

    return (
      <div className="header">
        <div className="images">
        <Slider {...sliderSettings}>
          <div><img src="src/assets/Food-1.jpg" alt="instructions"/></div>
          <div><img src='src/assets/Food-2.jpg' alt="instructions"/></div>
          <div><img src='src/assets/Food-3.jpg' alt="instructions"/></div>
        </Slider>
        </div>
      </div>
    );
  }
}

export default Header;
