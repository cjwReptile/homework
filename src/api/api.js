import axios from 'axios'


let base = 'http://localhost:8080/daydayup/homework';
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

export const requestLogin = params => { return axios.post(`/homework/login`, params).then(res => res.data); };

