<template>
	<el-form lable-position="left" label-width="0" class="demo-ruleForm login-container">
	   <h2>user login</h2>
		<el-form-item>

		  <el-row>
		  	<el-col :span="24">
		  			<el-input type="text" v-model="form.username"></el-input>
		  	</el-col>
		  </el-row>	
		</el-form-item>
		<el-form-item label>
		  <el-row>
		  	<el-col :span="24">
		  			<el-input type="text" v-model="form.password"></el-input>
		  	</el-col>
		  </el-row>	
		</el-form-item>

		<el-form-item style="width:100%">	 
		  			<el-button :loading="logining" type="primary" style="width:100%" @click="submitForm">sign in</el-button>	

		</el-form-item>
	</el-form>

</template>
<script >
    import {requestLogin} from '../api/api';

	export default{
		data(){
			return {
				logining:false,
				form:{
					username:"",
					password:""
				}
			}
		},
		methods:{
			submitForm:function(){
				var param={
					'userName':this.form.username,
					'password':this.form.password
				};

				requestLogin(param).then(data=>{
					if(data.flag!=1){
						this.$message({
							message:data.msg,
							type:'error'
						})
					}else{
						this.logining=true;
						this.$store.state.admin=data.username;
						this.$router.push("/main");
					}
				})
			},
			test:function(){
               this.$router.push("/main");
			}
		}


	}
</script>
<style>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
</style>
