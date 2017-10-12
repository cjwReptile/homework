<template>
	<el-row class="selfContainer" >
		<template v-for="(item,index) in contentList" >
			<el-row>
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
							{{item.contentId}}
					</el-col>
					</el-row>
					
				    <el-row>
					<template v-for="itemSon in item.homeWorkLocationPos">
						
						<el-col :span="item.size">
						<div class="imageContent">
							<img :src="itemSon.contentUrl" class="image">
					    </div>
						</el-col>

					</template>
					</el-row>
					<el-row>
						<el-col :span="24">
							<el-rate 
							v-model="rates[index]" 
							show-text 
							text-color="#ff9900" 
                            :texts="texts"
                     
                            >
							</el-rate>
						</el-col>
						<el-col :span="24">
							<el-input type="textarea" :rows="3" v-model="value[index]" placeholder="评语"></el-input>
						</el-col>

						<el-col :span="2" :offset="22" class="poseButton">
							<el-button @click="pose(index)" type="primary">点评</el-button>
						</el-col>
						

					</el-row>
			
			</el-col>

			
		</el-col>
	</el-row>
	</template>
	</el-row>
</template>
<script >
import {getHomeWorkList} from '../api/api'
export default{
	data(){
		return {
            contentList:{},
            priClass:{
            	maxWidth:"",
            	maxHeigth:""
            },
            texts:[1,2,3,4,5],
            value:[],
            contentIds:[],
            rates:[],
            loading:true
		}
	},
	methods:{
		homeWorkInfo:function(){
			getHomeWorkList().then(data=>{
				
				for(let i=0;i<data.length;i++){
				    data[i].size=8;
				
				}
				this.contentList=data;

			})
		},
		pose:function(index){
             alert(this.contentIds[index]);
             alert(this.value[index]);
             alert(this.rates[index]);
		}
	},
	mounted:function(){//获取作业记录key
            getHomeWorkList().then(data=>{
				
				for(let i=0;i<data.length;i++){
				    data[i].size=8;
				    this.contentIds[i]=data[i].contentId;				
				}
				this.contentList=data;
               
			})  
            this.loading=false;
   }
}
</script>
<style>
.record{
	padding: 5px;
	box-shadow: 0 0 1px #cac6c6; 
	background-color: #FFFFFF;
}

.head{
	height: 40px;
	width: 40px;
}
.selfContainer{
	margin: 20px 20px;

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
	height: 100%;
	width: 100%;

}
.image{
	
	margin: 5px 5px;
	max-width: 200px;
	max-height:200px;
	float: left;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
 .poseButton{
 	 margin-top: 10px;
 }
</style>