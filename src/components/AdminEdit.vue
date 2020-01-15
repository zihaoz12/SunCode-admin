<template>
    <div class="about">
        <h1>{{ id ? 'Edit' : "New"}} Admin User</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="Username" >
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label=" password" >
                <el-input type="password" v-model="model.password"></el-input>
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
            model:{},
        }
    },
    methods:{
        async save(){   
            let res;
            if(this.id){
                res = await this.$http.put(`rest/admins/${this.id}`,this.model)
            } else{
                res = await this.$http.post('rest/admins',this.model)
            }   
           
           this.$router.push('/admins/list')
           this.$message({
               type:'success',
               message:"submit successfully"
           })
           window.console.log(res)
        },
        async fetch(){
            const res = await this.$http.get(`rest/admins/${this.id}`)
            // this.model = Object.assign({},this.model,res.data)
            this.model = res.data
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>