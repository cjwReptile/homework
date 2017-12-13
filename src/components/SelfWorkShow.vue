
<template>
	<el-row class="selfContainer" >
		<el-row>
			<el-col :span="4" :offset="16">
				<el-switch
                   v-model="listType"
                   active-text="全部作业"
                   inactive-text="未阅作业"
                    active-color="#13ce66"
                   inactive-color="#ff4949"
                   active-value=1
                   inactive-value=0
                   @change="homeWorkInfo()">
                 </el-switch>
			</el-col>
		</el-row>
		<template v-for="(item,index) in contentList" >
			<el-row v-show="shows[index]||(item.contentReaded=='1')">
			
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
							<el-input type="textarea" :rows="3" v-model="comment[index]" placeholder="评语"></el-input>
						</el-col>

						<el-col :span="2" :offset="21" class="poseButton">
							<el-button @click="poseHomeWorkContent(index)" type="primary">点评</el-button>
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
import {saveHomeWorkContent} from '../api/api'
import Vue from 'vue'
export default{
	data(){
		return {
            contentList:{},//作业列表
            priClass:{
            	maxWidth:"",
            	maxHeigth:""
            },
            texts:[1,2,3,4,5],//评分数组
            comment:[],//评论数组
            contentIds:[],//主键组
            rates:[],//评分组
            shows:[],//是否显示
            test:true,
            listType:0 //0查所有列表 1查未阅列表
           
		}
	},
	methods:{
		homeWorkInfo:function(){
		
			 let params={
		   	  listType:this.listType
		   }
			getHomeWorkList(params).then(data=>{
				let middle=[];
				for(let i=0;i<data.length;i++){
				    data[i].size=8;
				
				}
				this.contentList=data;
			})
		},
		poseHomeWorkContent:function(index){//提交作业点评
			 let homeWorkCommentPo={
                 contentId:this.contentIds[index],
                 comment:this.comment[index],
                 score:this.rates[index]
			 }
             saveHomeWorkContent(homeWorkCommentPo).then(data=>{
                 if(data.flag==1){
                     this.shows[index]=false;   
                     Vue.set(this.shows, index, this.shows[index]); //提交之后未阅列表不再显示此条记录            
                 }

             })
		}
	},
	mounted:function(){//获取作业列表，唯一主键
		   let params={
		   	  listType:this.listType
		   }
            getHomeWorkList(params).then(data=>{
				
				for(let i=0;i<data.length;i++){
				    data[i].size=8;
				    this.contentIds[i]=data[i].contentId;	
				    if(data[0].contentReaded=='0'){
				    	 this.shows[i]=true;	
				    }			   		
				}
				this.contentList=data;
               
			})  
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