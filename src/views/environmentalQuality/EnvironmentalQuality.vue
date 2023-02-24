<!-- 环境质量 -->
<template>
  <div class="environmental-quality">
    <!-- 录播图 -->
    <div class="swiper">
      <el-carousel :autoplay="false" type="card"  height="80vh">
      <el-carousel-item v-for="item in tabs" :key="item.id">
      
      </el-carousel-item>
    </el-carousel>
    </div>
    <!-- tabs切换轮播 -->
    <div class="environmental-wrap">
      <div class="environmental-item" v-for="item in  tabs" :key="item.id" >
        {{ item.lable }}
      </div>
    </div>
  </div>
</template>

<script >


export default {
  name: 'environmentalQuality',
  data() {
    return {
      tabs: [{
        id: 0,
        lable: '空气'
      }, {
        id: 1,
        lable: '水质'
      }, {
        id:2,
        lable:'土壤'
      }]
    }
  },
  mounted() {

  },
}
</script>

<style scoped>

.environmental-quality{
  display: grid;
  grid-template-rows: 80vh 10vh;
}

:deep(.el-carousel){
  /* max-width: 86vw;
  min-width: 86vw; */
}

.el-carousel__item {
  background-color: #99a9bf69;
}

/* 
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf69;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce669;
} */

:deep(.el-carousel__indicators){
  display: none !important;
}

.environmental-wrap{  
  width: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.environmental-item{
  
}
</style>
