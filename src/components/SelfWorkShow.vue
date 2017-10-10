<template>
	<el-row class="selfContainer">
		<template v-for="item in contentList">
		<el-col :span="16" :offset="4" class="record">
			<el-col :span="1" >
				<img src="../assets/111.jpg" class="head">
			</el-col>
			<el-col :span="2" class="">
				<el-col :span="24">
					{{item.userName}}
				</el-col>
				<el-col :span="24">
					{{item.contentTime}}
				</el-col>
			</el-col>

			<el-col :span="24">
			
					<el-row>
						<el-col :span="5">
							{{item.size}}
					</el-col>
					</el-row>
					
				    <el-row>
					<template v-for="itemSon in item.homeWorkLocationPos">
						
						<el-col :span="item.size">
						<div class="imageContent">
							<img :src="itemSon.contentUrl" :class="item.classStyle">
					    </div>
						</el-col>

					</template>
					</el-row>
			
			</el-col>

			
		</el-col>
	</template>
		<el-button @click="homeWorkInfo">ssssss</el-button>
	</el-row>
</template>
<script >
import {getHomeWorkList} from '../api/api'
export default{
	data(){
		return {
            contentList:{},
       
		}
	},
	methods:{
		homeWorkInfo:function(){
			getHomeWorkList().then(data=>{
				
				for(let i=0;i<data.length;i++){
					let priClass={};
					if(data[i].homeWorkLocationPos.length==1){
                        priClass.maxWidth='500px';
                        priClass.maxHeigth='500px';
					}else if(data[i].homeWorkLocationPos.length==2){
						data[i].size=10;
						priClass.maxWidth='300px';
                        priClass.maxHeigth='300px';
					}
					else if(data[i].homeWorkLocationPos.length>=3){
						data[i].size=8;
						 priClass.maxWidth='300px';
                        priClass.maxHeigth='300px';
					}
					data[i].classStyle=priClass;
				}
				this.contentList=data;

			})
		}
	}
}
</script>
<style>
.record{
	padding: 5px;
	box-shadow: 0 0 25px #cac6c6;
}

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
	overflow: hidden;
	height: 200px;
	width: 200px;
}
.image{
	
	max-width: 300px;
	max-height: 300px;
	float: left;
}
</style>