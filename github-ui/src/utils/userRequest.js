import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACK_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});


export default axios;