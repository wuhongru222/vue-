<template>
  <div>
    <router-link to="/maps">
    <el-button type="success">进入百度地图</el-button>
    </router-link>
     <router-link to="/add1">
    <el-button type="success">进入vuex学习页面1</el-button>
    </router-link>
    
    <el-button type="success" @click="add2">进入vuex学习页面2</el-button>
  
  </div>
</template>

<script>
export default {
name:'index',
methods:{
    add2(){
        this.$router.push({ path: '/add2' })
    }
}

}
</script>

<style>

</style>