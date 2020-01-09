<template>
    <div class="about">
        <h1>{{ id ? 'Edit' : "New"}} House</h1>
        <el-form label-width="150px" @submit.native.prevent="save">
            <el-form-item label=" House Address" >
                <el-input v-model="model.address"></el-input>
            </el-form-item>
            <el-form-item label=" House Address 2" >
                <el-input v-model="model.address2"></el-input>
            </el-form-item>
            <el-form-item label=" House State" >
                <el-input v-model="model.state"></el-input>
            </el-form-item>
            
           
            
            <el-form-item>
                <el-button type="primary" native-type="submit">Save</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props:{
            id:{}
    },
    data(){
       return{
           model:{}
       } 
    },
    methods:{
        async save(){
            let res
            if(this.id){
                 res = await this.$http.put(`houses/${this.id}`, this.model)
            }else{
                 res = await this.$http.post('houses', this.model)
            }   
            this.$router.push('/houses/list')
            this.$message({
               type:'success',
               message:"submit successfully"
            })
            window.console.log("Save");
            window.console.log(res);
        },
        async fetch(){
            const res = await this.$http.get(`houses/${this.id}`);
            this.model = res.data
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .uploader-container{
      display: flex;
      flex-direction: row;
      align-content: space-around;
  }

</style>

