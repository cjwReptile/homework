

export const getLoginInfo = params => {
	let userInfo={
		username:"",
		token:"",
		exp:"" 
	};
	userInfo.username=localStorage.getItem("admin");
    userInfo.token=localStorage.getItem("token");
    userInfo.roles=localStorage.getItem("roles");
   // userInfo.exp=localStorage.getItem("exp");
    return userInfo;
};


export const setLoginInfo = params => {

	localStorage.setItem("admin",params.username);
    localStorage.setItem("token",params.token);
    localStorage.setItem("roles",params.roles);
};