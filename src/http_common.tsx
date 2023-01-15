import axios from 'axios';
const http = axios.create({
    baseURL:"http://first-laravel-app.com",
    headers:{
        "Content-type": "application/json"
    }
})
export default http;