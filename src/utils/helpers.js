import axios from 'axios';

export default {
  createUser: function (dataObj) {
    const axiosSettings = {
      method: 'POST',
      username: dataObj.username,
      password: dataObj.password,
      firstname: dataObj.firstname,
      lastname: dataObj.lastname,
      phone: dataObj.phone,
      email: dataObj.email,
      address: dataObj.address,
      city: dataObj.city,
      state: dataObj.state,
      zipcode: dataObj.zipcode
    }
    return axios.post('https://shrouded-sea-32950.herokuapp.com/users/new', axiosSettings).then(res => {
      return res
    })
  },
  getRestaurants: function (dataObj) {
    const axiosSettings = {
      method: 'POST',
      address: dataObj.address,
      zipcode: dataObj.zipcode
    }
    return axios.post('https://shrouded-sea-32950.herokuapp.com/menu', axiosSettings).then(res => {
      return res
    })
  },
  signIn: function (username, password) {
    const axiosSettings = {
      method: 'GET',
      username: username,
      password: password
    }
    return axios.get('https://shrouded-sea-32950.herokuapp.com/users/' + username + '/' + password, axiosSettings).then(res => {
      return res
    })
  },
  updateUser: function (dataObj, username) {
    const axiosSettings = {
      method: 'PUT',
      password: dataObj.password,
      firstname: dataObj.firstname,
      lastname: dataObj.lastname,
      phone: dataObj.phone,
      email: dataObj.email,
      address: dataObj.address,
      city: dataObj.city,
      state: dataObj.state,
      zipcode: dataObj.zipcode
    }
    return axios.put('https://shrouded-sea-32950.herokuapp.com/users/' + username, axiosSettings).then(res => {
      return res
    })
  },
  deleteUser: function (username) {
    const axiosSettings = {
      method: 'DELETE',
      username: username
    }
    return axios.delete('https://shrouded-sea-32950.herokuapp.com/users/' + username, axiosSettings).then(res => {
      return res
    })
  },
  saveItem: function (dataObj) {
    const axiosSettings = {
      method: 'POST',
      restaurantname: dataObj.restaurantname,
      street: dataObj.street,
      city: dataObj.city,
      state: dataObj.state,
      zip: dataObj.zip,
      phone: dataObj.phone,
      itemname: dataObj.itemname,
      price: dataObj.price,
      description: dataObj.description,
      user_id: dataObj.userid
    }
    return axios.post('https://shrouded-sea-32950.herokuapp.com/favorites/new', axiosSettings).then(res => {
      return res
    })
  },
  getFavs: function (username, password) {
    const axiosSettings = {
      method: 'GET',
      username: username,
      password: password
    }
    return axios.get('https://shrouded-sea-32950.herokuapp.com/users/' + username + '/' + password + '/favorites', axiosSettings).then(res => {
      return res
    })
  },
  deleteFav: function (itemname) {
    const axiosSettings = {
      method: 'DELETE',
      itemname: itemname
    }
    return axios.delete('https://shrouded-sea-32950.herokuapp.com/favorites/' + itemname, axiosSettings).then(res => {
      return res
    })
  },
}
