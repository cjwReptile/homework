<template>
	<el-row class="selfContainer">
		
		<el-col :span="20" :offset="2">
			<el-col :span="1" >
				<img src="../assets/111.jpg" class="head">
			</el-col>
			<el-col :span="2" class="">
				<el-col :span="24">
					username
				</el-col>
				<el-col :span="24">
					time
				</el-col>
			</el-col>

			<el-col :span="24">
				<el-col :span="10" class="imageContent">
					<img src="../assets/111.jpg" class="contentName">
				</el-col>
				<el-col :span="10" class="imageContent">
					<img src="../assets/111.jpg" class="contentName">
				</el-col>

			</el-col>

			
		</el-col>
	</el-row>
</template>
<script >
export default{
	data(){
		return {

		}
	}
}
</script>
<style>
.head{
	height: 40px;
	width: 40px;
	border-radius: 20px;
}
.selfContainer{
	margin: 10px auto;
}
.userName{
	height: 40px;
	line-height: 40px;
}
.contentName{
	margin: 5px;
    max-height: 100%;
	max-width: 100%;
}
.imageContent{
	padding: 5px;
	height: 200px;
	width: 200px;
}
</style>