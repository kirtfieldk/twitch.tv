import axios from 'axios';


export default axios.create({
    baseURL: 'http://localHost:3001'
})