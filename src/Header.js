import React, {Component} from 'react';
import Slider from 'react-slick';
import './css/Header.css';

class Header extends Component {

  render() {
    const sliderSettings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      centerMode: true,
      pauseOnHover: true,
      adaptiveHeight: true
      // className: ''
      // fade: true
    };

    return (
      <div className="header">
        <Slider {...sliderSettings}>
          <div><img src='http://placekitten.com/g/1000/150' alt="cat"/></div>
          <div><img src='http://placekitten.com/g/1000/150' alt="cat"/></div>
          <div><img src='http://placekitten.com/g/1000/150' alt="cat"/></div>
          <div><img src='http://placekitten.com/g/1000/150' alt="cat"/></div>
        </Slider>
      </div>
    );
  }
}

export default Header;
