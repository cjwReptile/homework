<template>

</template>
<script>
import {sendHomeWorkInfo} from '../api/api'
import {getHomeWorkKey} from '../api/api'
export default{

	data(){
		return{
			active:0,
			workInfo:{		
					contentId:"",
					contentType:"1"			
			},
			form:{			
				contentDescription:"",
				contentAuthority:"1",
				contentId:"",
				userName:this.$store.state.admin
			},
		}
	},
	methods:{
		submitForm:function(){
			          
       },
       uploadError:function(err,file){
        
       },
       uploadSuccess:function(){
       	this.$router.push({path:'/selfworkshow'});
       }
   },
   mounted:function(){//获取作业记录key
            
   }
}
</script>

<style>
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