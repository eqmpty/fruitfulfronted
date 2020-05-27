import axios from 'axios';

const instance = axios.create({
    baseURL:'https://fruitfulbacked.herokuapp.com/',
    header:{
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
});

instance.defaults.headers.common['Authorization'] = `AUTH TOKEN`;

instance.interceptors.request.use(
    config => {
        const token = (localStorage.getItem('user'));
        if(!config.headers.Authorization) {
            const newToken = JSON.parse(token);
            const newAccessToken = newToken.accessToken;
            config.headers['Authorization'] = newAccessToken;
            return config;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error);
    }
)

export default instance;