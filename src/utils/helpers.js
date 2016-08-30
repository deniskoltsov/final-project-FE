import axios from 'axios';

export default {
  getMenu: function (input) {
    const axiosSettings = {
      method: 'POST',
      name: input
    }
    return axios.post('http://localhost:3000/menu', axiosSettings).then(res => {
      return res
    })
  },
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
    return axios.post('http://localhost:3000/users/new', axiosSettings).then(res => {
      return res
    })
  },
  getRestaurants: function (dataObj) {
    const axiosSettings = {
      method: 'POST',
      address: dataObj.address,
      zipcode: dataObj.zipcode
    }
    return axios.post('http://localhost:3000/menu', axiosSettings).then(res => {
      return res
    })
  }
}
