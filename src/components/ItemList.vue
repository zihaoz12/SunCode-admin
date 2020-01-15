<template>
    <div>
        <h1>Item List 123</h1>
            <el-table :data="houses">
                <el-table-column prop="_id" label="ID" width="240">
                </el-table-column>  
                <el-table-column prop="address" label="Address" >
                </el-table-column> 
                <el-table-column prop="state" label="State" >
                </el-table-column> 
                <el-table-column prop="productImage1" label="Image 1" >
                    <template v-slot="scope">
                        <img :src="scope.row.productImage1" style="height:3rem">
                    </template>
                </el-table-column> 
                <el-table-column fixed="right" label="Options" width="180">
                    <template v-slot="scope">
                        <el-button type="text" size="small"
                            @click="$router.push(`/houses/edit/${scope.row._id}`)"
                        >Edit</el-button>
                        <el-button type="text" size="small"
                            @click="remove(scope.row)"
                        >Delete</el-button>
                    </template>
                </el-table-column>    
            </el-table>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            houses:[]
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('houses')
            this.houses = res.data
        },
        async remove(row){
              this.$confirm(`Your action will remove category: ${row._id}`, 'Warning', {
                confirmButtonText: 'Continue',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(async () => {
                    const res = await this.$http.delete(`houses/${row._id}`);
                    window.console.log("delete data:",res.data)
                    this.$message({
                    type: 'success',
                    message: 'Delete Successfully!'
                });
                this.fetch(); 
            }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: 'Cancel'
                });  
                   
            });
        }
    },
    created(){
        this.fetch();
    }
}
</script>

