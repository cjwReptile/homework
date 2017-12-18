import axios from 'axios'
import Vue from 'vue'
import store from '../store'
import router from '../router'
import {Message,Confirm,Alert } from 'element-ui'
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
	}).then(res=>res.data);
}

export const saveHomeWorkContent=params=>{
	return axios.post('/homework/homeworkContent',params)
	.then(res=>res.data);
}

axios.interceptors.request.use(
	config=>{
		if(store.state.token&&store.state.admin){
			config.headers.clentDegist = store.state.token;
			config.headers.username = store.state.admin;
		}
		return config;
	} ,
	error=> {
		return Promise.reject(error);
	});

axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {

		if (error.response) {

			switch (error.response.status) {
				case 306:   
				Alert('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});          
				});


				router.push("/");

				break;
			}
		}
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });







