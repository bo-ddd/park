<template>
    <div class="main">
      <div class="menu"><Layout></Layout></div>
      <div class="container">
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
  width: 200px;
  height: 100vh;
}
.container{
  width: calc(100vw - 200px);
}

</style>
