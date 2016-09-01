import React, {Component} from 'react';
import Modal from 'react-modal';
import util from './utils/helpers.js';
import {Link} from 'react-router';
import './css/MyProfile.css';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'dont-show',
      firstname: '',
      lastname: '',
      password: '',
      address: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      zipcode: '',
      userId: '',
      ModalOpen: false,
      userObj: {},
      userFavorites: []
    }
  }

  componentDidMount(){
    this.setState({firstname: this.props.userObj[0].firstname});
    this.setState({lastname: this.props.userObj[0].lastname});
    this.setState({address: this.props.userObj[0].address});
    this.setState({phone: this.props.userObj[0].phone});
    this.setState({email: this.props.userObj[0].email});
    this.setState({city: this.props.userObj[0].city});
    this.setState({state: this.props.userObj[0].state});
    this.setState({zipcode: this.props.userObj[0].zipcode});
    this.setState({userId: this.props.userObj[0].id});
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

  openModal(event) {
    this.setState({ModalOpen: true});
  }
  closeModal() {
    this.setState({ModalOpen: false});
  }

  closeEditUser(event){
    event.preventDefault();
    this.setState({profile: 'dont-show'})
  }

  onClickEditProfile(event){
    event.preventDefault();
    this.setState({profile: 'show'})
  }

  onClickEditUser(event){
    event.preventDefault();
    const dataObj = {
      password: this.props.userObj[0].password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    };

    if (this.state.password === this.props.userObj[0].password) {
      let username = this.props.userObj[0].username;
      util.updateUser(dataObj, username).then((response) => {
        this.setState({userObj: response.data});
        console.log('response:', this.state.userObj);
      });
    }
    else {
      this.setState({ModalOpen: true});
      console.log('this doesnt match');
    }
  }
  onClickDeleteUser(event){
    event.preventDefault();
    if (this.state.password === this.props.userObj[0].password) {
      let username = this.props.userObj[0].username;
      util.deleteUser(username).then((response) => {
        console.log('response:', response);
      });
    }
    else {
      this.setState({ModalOpen: true});
      console.log('this doesnt match');
    }
  }

  onClickGetFavorites(){
    const username = this.props.userObj[0].username
    const password = this.props.userObj[0].password
    util.getFavs(username, password).then((response) => {
      this.setState({userFavorites: response.data})
      console.log('FAVORITES:', this.state.userFavorites);
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      userObj: this.state.userObj,
      userFavorites: this.state.userFavorites
    }));
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
    return (
      <div className="MyProfile">
        <h4>{this.props.userObj[0].firstname}s profile page</h4>
        <div>{childrenWithProps}</div>
      <button onClick={(event) => this.onClickEditProfile(event)} className='submit-button btn-flat' type="submit">Edit</button>
      <Link to='/favorites' onClick={(event) => this.onClickGetFavorites(event)} className='submit-button btn-flat' type="submit">My Favs</Link>

      <Link to='/main' className='submit-button btn-flat' type="submit">Go Back</Link>

      <div className={this.state.profile}>
        <form>
          <div className="close-button-container">
            <button className='submit-button btn-flat' onClick={(event) => this.closeEditUser(event)}>x</button>
          </div>
          <div className='row-profile'>
            <div className='input-profile'>
              <input value={this.state.firstname} id="first_name" type="text" className="validate" onChange={(event) => this.handleChangeFirstName(event)}/>
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className='input-profile'>
              <input value={this.state.lastname} id="last_name" type="text" className="validate" onChange={(event) => this.handleChangeLastName(event)}/>
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className='input-profile'>
              <input disabled value={this.props.userObj[0].username} id="user_name" type="text" className="validate"/>
              <label htmlFor="user_name">Username</label>
            </div>
            <div className='input-profile'>
              <input type="password" id="password" className="validate" onChange={(event) => this.handleChangePassword(event)}/>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className='row-profile'>
            <div className='input-profile'>
              <input value={this.state.phone} id="phone" type="tel" className="validate" onChange={(event) => this.handleChangePhone(event)}/>
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className='input-profile'>
              <input value={this.state.email} id="email" type="email" className="validate" onChange={(event) => this.handleChangeEmail(event)}/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className='row-profile'>
            <div className='input-profile'>
              <input value={this.state.address} id="address" type="text" className="validate" onChange={(event) => this.handleChangeAddress(event)}/>
              <label htmlFor="address">Address</label>
            </div>
          </div>
          <div className='row-profile'>
            <div className='input-profile'>
              <input value={this.state.city} id="city" type="text" className="validate" onChange={(event) => this.handleChangeCity(event)}/>
              <label htmlFor="city">City</label>
            </div>
            <div className='input-profile'>
              <input value={this.state.state} id="state" type="text" className="validate" onChange={(event) => this.handleChangeState(event)}/>
              <label htmlFor="state">State</label>
            </div>
            <div className='input-profile'>
              <input value={this.state.zipcode} id="zipcode" type="text" className="validate" onChange={(event) => this.handleChangeZipcode(event)}/>
              <label htmlFor="zipcode">Zipcode</label>
            </div>
            <button onClick={(event) => this.onClickEditUser(event)} className='submit-button btn-flat' type="submit">Update</button>
            <button onClick={(event) => this.onClickDeleteUser(event)} className='delete-button submit-button btn-flat' type="submit">Delete</button>
          </div>
        </form>
      </div>
      <Modal isOpen={this.state.ModalOpen} onRequestClose={this.closeModal} style={customStyles}>
          <div className="modal-container">
            <h2 ref="subtitle">Sorry, looks like you entered an incorrect password, please try again.</h2>
            <button className='submit-button btn-flat' onClick={(event) => this.closeModal(event)}>x</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default MyProfile;
