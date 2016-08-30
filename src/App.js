import React, {Component} from 'react';
import Welcome from './Welcome.js';
import Modal from 'react-modal';
import {Link} from 'react-router';
import util from './utils/helpers.js';
import './css/App.css';
import Header from './Header.js'
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "hello",
      showResults: true,
      modalIsOpen: false,
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      phone: '',
      email: '',
      address: '902 broadway',
      city: '',
      state: '',
      zipcode: '10010',
      userId: '',
      userSignedIn: false,
      userObj: {},
      restaurantsArr: []
    }
  }

  onClickSignUp(event) {
    event.preventDefault();
    this.setState({showResults: false});
    this.setState({modalIsOpen: false});

    const dataObj = {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    };
    util.createUser(dataObj).then((response) => {
      this.setState({userObj: response.data});
      this.setState({userId: response.data.id})
      console.log("USER ID:", this.state.userId);
      console.log('response:', this.state.userObj);
    });
  }

  handleChangeFirstName(event) {
    this.setState({firstname: event.target.value});
  }
  handleChangeLastName(event) {
    this.setState({lastname: event.target.value});
  }
  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleChangeAddress(event) {
    this.setState({address: event.target.value});
  }
  handleChangeCity(event) {
    this.setState({city: event.target.value});
  }
  handleChangeState(event) {
    this.setState({state: event.target.value});
  }
  handleChangeZip(event) {
    this.setState({zipcode: event.target.value});
  }
  handleChangePhone(event) {
    this.setState({phone: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  openSignUpModal(event) {
    this.setState({modalIsOpen: true});
  }
  afterOpenSignUpModal() {
    // references are now sync'd and can be accessed.
    console.log("modal opened");
  }
  closeSignUpModal() {
    this.setState({modalIsOpen: false});
  }

  testClick() {
    this.setState({userSignedIn: true});
    this.setState({showResults: false});
  }

  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };

    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      response: this.state.response,
      showResults: this.state.showResults,
      modalIsOpen: this.state.modalIsOpen,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      userId: this.state.userId,
      userSignedIn: this.state.userSignedIn,
      userObj: this.state.userObj,
      restaurantsArr: this.state.restaurantsArr
    }));

    return (
      <div className="App">
        <div className="nav-container">
          <div className='nav-item'>
            <Link to='/' onClick={(event) => this.backToHome(event)}>
            <img className='nav-logo' src="src/assets/FOODLIB_logo.png" alt="logo"/>
            </Link>
          </div>
          {this.state.userSignedIn ? <div className='nav-item'> <p>{this.state.username}</p> </div> :
            <div className='nav-item'>
              <input className='nav-input' placeholder='Username' onChange={(event) => this.loginUsername(event)}/>
              <input className='nav-input' placeholder='Password' onChange={(event) => this.loginPassword(event)}/>
              <Link onClick={(event) => this.onClickSignIn(event)} to='/main' className='sign-in-button submit-button btn-flat' type="submit">Sign In</Link>
            </div>
          }
        </div>
        {this.state.showResults ? <Header /> : null}
        <div>
          <img className='logo' src="src/assets/FOODLIB_logo.png" alt="logo"/>
        </div>
        {this.state.showResults ? <Welcome/> : null}

        <button className='submit-button btn-flat' onClick={(event) => this.openSignUpModal(event)}>Sign Up</button>
        <Link onClick={(event) => this.testClick(event)} to='/main' className='submit-button btn-flat' type="submit">test</Link>

        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenSignUpModal} onRequestClose={this.closeSingUpModal} style={customStyles}>
          <div className="modal-container">
            <h2 ref="subtitle">Hello</h2>
            <div>I am a modal</div>
            <button className='submit-button btn-flat' onClick={(event) => this.closeSignUpModal(event)}>x</button>
          </div>
          <form>
            <div className='row'>
              <input className='input' placeholder='First Name' onChange={(event) => this.handleChangeFirstName(event)}/>
              <input className='input' placeholder='Last Name' onChange={(event) => this.handleChangeLastName(event)}/>
              <input className='input' placeholder='Username' onChange={(event) => this.handleChangeUsername(event)}/>
              <input className='input' type="password" placeholder='Password' onChange={(event) => this.handleChangePassword(event)}/>
            </div>
            <div className='row'>
              <input className='input' placeholder='Phone Number' onChange={(event) => this.handleChangePhone(event)}/>
              <input className='input' type="email" placeholder='Email' onChange={(event) => this.handleChangeEmail(event)}/>
            </div>
            <div className='row'>
              <input className='input' placeholder='Address' onChange={(event) => this.handleChangeAddress(event)}/>
            </div>
            <div className='row'>
              <input className='input' placeholder='City' onChange={(event) => this.handleChangeCity(event)}/>
              <input className='input-state' placeholder='State' onChange={(event) => this.handleChangeState(event)}/>
              <input className='input-zipcode' type="integer" placeholder='Zip Code' onChange={(event) => this.handleChangeZip(event)}/>
            </div>

            <Link onClick={(event) => this.onClickSignUp(event)} to='/main' className='submit-button btn-flat' type="submit">Submit</Link>
          </form>
        </Modal>

        <div>{childrenWithProps}</div>
      </div>
    );
  }
}

export default App;
