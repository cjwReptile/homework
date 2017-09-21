<template>
	<el-row class="contain">
		<el-col :span='24' class="header">
			<el-col :span="4" class="logo">
				homework
			</el-col>
			<el-col :span="4" :offset="15">
				<el-dropdown>
					<span class="el-dropdown-link">
						<img src="../assets/111.jpg" class="userinfo">
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		
		<el-col :span="4" class="left">
			<el-menu default-active="2" class="el-menu-vertical-demo left" >
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>作业管理</template>
					<el-menu-item-group>
						<template slot="title">作业展示</template>
						<el-menu-item index="1-1">我的作业</el-menu-item>
						<el-menu-item index="1-2">同学作业</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="作业编辑">
						<el-menu-item index="1-3">提交作业</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item index="2"><i class="el-icon-menu"></i>个人信息</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-setting"></i>关于我们</el-menu-item>
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

}
.logo{
	border-right-style: solid;
	border-right-width:thin;

}
</style>