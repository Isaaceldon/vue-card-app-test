import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'https://phplaravel-859613-2969716.cloudwaysapps.com/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("userToken")
      }
})

export { getAPI }