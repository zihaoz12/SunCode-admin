<template>
<el-container style="height: 100vh; ">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1']" unique-opened: default-active="$route.path">
      <el-submenu  index="1">
        <template slot="title"><i class="el-icon-message"></i>Data Manager</template>        
        <el-menu-item-group>
          <template slot="title">Item</template>
          <el-menu-item index="/houses/create">Create New Item</el-menu-item>
          <el-menu-item index="/houses/list">Items List</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group>
          <template slot="title">Admins</template>
          <el-menu-item index="/admins/create">Create New Admin</el-menu-item>
          <el-menu-item index="/admins/list">Admins List</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      
      
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>Hello {{ currentUser }}</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Edit</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button @click="LogOut()" type="danger"> Log Out</el-button>
    </el-header>
    
    <el-main>
      <router-view :key="$route.path"></router-view>
      
    </el-main>

  </el-container>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '1/7/2020',
        name: 'Admin',
        number: '123456789'
      };
      return {
        currentUser:'',
        tableData: Array(20).fill(item)
      }
    },
    methods:{
      async LogOut(){
        localStorage.clear();
        window.location.href='/';
      }
    },
    mounted(){
      if(localStorage.currentUser){
        this.currentUser = localStorage.currentUser
      }
    }
  };
</script>
