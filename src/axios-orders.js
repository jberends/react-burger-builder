import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-fe4c6.firebaseio.com/'
});

export default instance;