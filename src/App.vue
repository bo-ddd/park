<template>
    <div class="main">
      <div class="menu"><Layout></Layout></div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
 import Layout from "../src/views/layout/layoutView.vue";
export default {
     components:{
      Layout
     }
}
</script>

<style>

body{
  margin: 0;
  padding: 0;
}

.main{
  display: flex;
}

.menu{
  min-width: 15%;
  height: 100vh;
}


</style>
