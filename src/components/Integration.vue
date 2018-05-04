	<template>

		<el-row class='container'>

			<el-tabs type="border-card">
				<el-tab-pane label="父板块">

					<el-form   ref="ruleForm2" label-width="100px" class="">

						<el-form-item label="增加板块">
							<el-row>
								<el-col :span="10">
									<el-input type="input"></el-input>
								</el-col>
								<el-col :span="4">
									<el-button type="primary" >提交</el-button>
								</el-col>
							</el-row>
						</el-form-item>

						<el-form-item label="已有板块">
							<el-table :data="tableData"  border>


								<el-table-column type="expand" style="padding: ">
									<template slot-scope="props" >

									</template>
								</el-table-column>

								<el-table-column prop="date" label="时间" align='left'>	


								</el-table-column>
								<el-table-column prop="plateName" label="板块名称" align='left'>
									<template slot-scope="scope">

										<template v-if="shows[scope.$index]">
                                        
										<el-input v-model="scope.row.plateName">
                                        
										</el-input>
										</template>
										<template v-else>
							
											{{scope.row.plateName}}
									
										</template>


									</template>

								</el-table-column>

								<el-table-column  label="操作" align='left'>
									<template slot-scope="scope">
                                       

										<el-button
										size="mini"
										@click="handleEdit(scope.$index, scope.row)">
										<template v-if="shows[scope.$index]">
											取消
										</template>
										<template v-else>
											编辑
										</template>
									     </el-button>

                                         <el-button
										size="mini"
										type=""
										v-if="shows[scope.$index]"
										@click="handleSubmit(scope.row)">确定</el-button>

										<el-button
										size="mini"
										type="danger"
										@click="handleDelete(scope.row)">删除</el-button>

									</template>
								</el-table-column>
							</el-table>			
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="子版块">

				</el-tab-pane>


			</el-tabs>
		</el-row>



	</template>
	<script>
		import Vue from 'vue'
		import {getPlateList} from '../api/api'

		export default{

			data(){
				return{
					plateParent:"",
					shows:[],
					tableData:[]

				}
			},
			methods:{
				submitForm:function(){

				},
				uploadError:function(err,file){

				},
				uploadSuccess:function(){
					this.$router.push({path:'/selfworkshow'});
				},
				handleEdit:function(index,row){
					if(this.shows[index]==true){
                         this.shows[index]=false;
                         Vue.set(this.shows, index, this.shows[index]);
					}else{
						 this.shows[index]=true;
                         Vue.set(this.shows, index, this.shows[index]);
					}
                  
				},
				handelUpdate:function(index,row){
                       this.shows[index]=false;
                       Vue.set(this.shows, index, this.shows[index]);
				},
				handleDelete:function(row){

				}
			},
	        mounted:function(){
	        	let params={};
                getPlateList(params).then(data=>{
            	 if(data.flag==false){
                	this.$message({
						showClose: true,
						message: '加载数据失败',
						type:'error'
					});
                 }else{
                 	this.tableData=data.data;
                 }
            });
           
	   }
	}
</script>

<style>
.container{
	margin: 10px 10px 10px 10px;
	height: 100%;
	padding: 20px
}
</style>