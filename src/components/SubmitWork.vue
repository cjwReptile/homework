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
					<el-input v-model="form.description" type="textarea" :rows="6" >
						
					</el-input>
				</el-form-item>

				<el-form-item label="是否公开">
					<el-col :span="4">
						<el-radio @ class="radio" v-model="form.radio" label="1">是</el-radio>
						<el-radio class="radio" v-model="form.radio" label="2">否</el-radio>
					</el-col>
					
				</el-form-item>

				<el-form-item label="上传作业">
					<el-col :span="24" class="uploadBox">
					<el-upload
					action="/homework/image"
					list-type="picture-card" :show-file-list="true" :auto-upload="true" class="upload" :on-error="uploadError" >
					<i class="el-icon-plus" ></i>
				</el-upload>
			
				</el-col>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm">提交作业</el-button>
			</el-form-item>

		</el-form>
	</el-col>		
</el-row>
</template>
<script>
export default{
	data(){
		return{
			active:0,
			form:{
				radio:"1",
                description:""
			}
		}
	},
	methods:{
        next:function(){
            this.active++;
        },
        submitForm:function(){

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