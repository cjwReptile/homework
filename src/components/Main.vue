<template>
	<el-row class="contain">
		<el-col :span='24' class="header">
			<el-col :span="4" class="logo">
				homework
			</el-col>
			<el-col :span="4" :offset="15">
				<el-dropdown>
					<span class="el-dropdown-link">
						<img src="http://localhost:8080/daydayup/statics/image/uploadImage/0aa440b1-6eb1-4dc9-8249-6895a2e5ceaf电费.PNG" class="userinfo">
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>

		<el :span="24">
			{{$store.state.show}}
		</el>
		
		<el-col :span="4" class="left">
			<el-menu :default-active="$route.path" class="el-menu-vertical-demo left" unique-opened router >
				<template v-for="(item,index) in $router.options.routes">
					<el-submenu :index="index+''" v-if="!item.hidden&&!item.leaf">
						<template slot="title">
							<i :class="item.icon"></i>{{item.name}}
						</template>
						<el-menu-item v-for="child in item.children" v-if="!child.hidden" :index="child.path">
					       &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{child.name}}
					       <el-badge v-if="child.badge=='selfworkshow'" :value="12">
					       	
					       </el-badge>
						</el-menu-item>
						
					</el-submenu>
				</template>
					
			</el-menu>
		</el-col>
		<el-col :span="20" class="content">
			<router-view></router-view>
		</el-col>

	</el-row>

</template>
<script>
export default{
	data(){
		return {}
	}
}
</script>
<style>

.contain{
	position: absolute;
	height: 100%;
	margin: 0;
	padding: 0;
    width: 100%;
}
.header{
	padding: 0;
	height: 60px;
	line-height: 60px;
	font-size: 35px;
	background-color: #58B7FF;
	color: #F9FAFC;
}
.userinfo{
	height: 40px;
	width: 40px;
	border-radius: 20px;
	margin: 10px 0 0 0
}
.left{
	height:100%;
}
.content{
    height:100%;
    overflow: auto;
    background-color:#F0F0F0;
}
.logo{
	border-right-style: solid;
	border-right-width:thin;

}
</style>