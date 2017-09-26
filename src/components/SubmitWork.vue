<template>
	<el-row class="container">
		<!-- <el-col :span="16" :offset="2">
			<el-steps :space="250" :active="active">
				<el-step title="添加作业描述" ></el-step>
				<el-step title="填写作业信息" ></el-step>
				<el-step title="上传作业" ></el-step>
			</el-steps>
		</el-col> -->
		<el-col :span="16">
			<el-form label-width="100px">
				<el-form-item label="作业描述">
					<el-input type="textarea" v-model="form.contentDescription" :rows="6" >
						
					</el-input>

				</el-form-item>
              
				<el-form-item label="是否公开">
					<el-col :span="4">
						<el-radio class="radio" v-model="form.contentAuthority" label="1">是</el-radio>
						<el-radio class="radio" v-model="form.contentAuthority" label="2">否</el-radio>
					</el-col>
					
				</el-form-item>

				<el-form-item label="上传作业">
					<el-col :span="24" class="uploadBox">
					<el-upload
					ref="upload"
					action="/homework/imageTest"
					list-type="picture-card" :show-file-list="true" :auto-upload="false" class="upload" :on-error="uploadError"
					:data="workInfo" >
					<i class="el-icon-plus" ></i>
				</el-upload>
			
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm">提交作业</el-button>
			</el-form-item>

		</el-form>

	</el-col>		
	  <el-col :span="24">
                	{{form.contentDescription}}
                </el-col>
</el-row>
</template>
<script>
 import {sendHomeWorkInfo} from '../api/api'
export default{
   
	data(){
		return{
			active:0,
			totalContentId:"1",
			workInfo:{
				contentEnity:{
					contentId:this.totalContentId,
					admin:this.$store.state.admin
				}
			},
			form:{			
				contentDescription:"",
				contentAuthority:"1",
				contentId:"7",
				userName:this.$store.state.admin
			}
		}
	},
	methods:{
        next:function(){
            this.active++;
        },
        submitForm:function(){
              sendHomeWorkInfo(this.form).then(data=>{
              	    alert("success");
              })
           //   this.$refs.upload.submit();
        },
        uploadError:function(err,file){
        	  this.$message({
              showClose: true,
          	  message: '上传失败',
          	  type:'error'
        });
        }
	}
}
</script>
<style >
.container{
	margin: 10px 10px 10px 10px;
	border: solid #F9FAFC 1px;
	height: 100%;
	padding: 20px
}
.upload{
	float:left;
}
.uploadBox{
	border: solid #C0CCDA 1px;
	padding: 20px;
}
</style>