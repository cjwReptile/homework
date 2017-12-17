import axios from 'axios'
import Vue from 'vue'
import store from '../store'
let base = 'http://localhost:8080/daydayup/homework';

//axios.defaults.withCredentials=true
export const requestLogin = params => {
     return   axios({
        	url:"/homework/login",
        	data:params,
        	method:"post",
            withCredentials:true,
            headers:{
            	//clentDegist:this.$store.state.token=data.token
            }
        }).then(res=>res.data);

 //return axios.post('/homework/login', params).then(res => res.data);
};

export const sendHomeWorkInfo=params=>{
	   return axios.post('/homework/homeWorkContent',params)
	   .then(res=>res.data);
}

export const getHomeWorkKey=params=>{
	   return axios.post('/homework/homeWorkKey',params)
	   .then(res=>res.data);
}

export const getHomeWorkList=(params,headers)=>{

	return   axios({
        	url:"/homework/homeWorkInfo1",
        	data:params,
        	method:"post",
            headers:headers
             
        }).then(res=>res.data);
}

export const saveHomeWorkContent=params=>{
	   return axios.post('/homework/homeworkContent',params)
	   .then(res=>res.data);
}