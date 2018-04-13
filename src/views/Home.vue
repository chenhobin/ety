<template>
  <div class="home">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="week"
      label="星期一"
      width="180">
    </el-table-column>
    <el-table-column
     prop="week1"
      label="星期二"
      width="180">
    </el-table-column>
    <el-table-column
     prop="week2"
      label="星期三"
      width="180">
    </el-table-column>
    <el-table-column
     prop="week3"
      label="星期四"
      width="180">
    </el-table-column>
    <el-table-column
     prop="week4"
      label="星期五"
      width="180">
    </el-table-column>
    <el-table-column
      prop="state"
      label="课程"
      width="180">
    </el-table-column>
<el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="jgr(scope.row)" type="text" size="small">x</el-button>
      
      </template>
</el-table-column>




  </el-table>
  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

ename: 'home'
export default {
  data() {
        return {
      tableData:[]
      
          
         
        }
      },
      methods:{
        deleteRow(e,i){
        
          console.log(e)
        },
      
        
    jgr(e){
          this.$http.post("http://localhost:3000/del",{id:e.id},{emulateJSON:true}).then(function(){
             this.tableData.splice(this.tableData.indexOf(e),1)//前台删除数据
          })
    }
      },
      watch:{
             '$route':function(){
               this.$http.post('http://localhost:3000',{id:this.$route.params.id},{emulateJSON:true}).then((e)=>{
                return this.tableData=e.body
               })
             }
      },
      created(){
this.$http.post('http://localhost:3000',{id:this.$route.params.id},{emulateJSON:true}).then((e)=>{
                return this.tableData=e.body
               })
      }
}
</script>
