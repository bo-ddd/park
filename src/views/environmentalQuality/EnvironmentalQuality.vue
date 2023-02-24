<!-- 环境质量 -->
<template>
  <div class="environmental-quality">
    <!-- 录播图 -->
    <el-carousel :autoplay="false" type="card"  height="80vh">
      <el-carousel-item v-for="item in tabs" :key="item.id">
      
      </el-carousel-item>
    </el-carousel>
    <!-- tabs切换轮播 -->
    <div class="environmental-wrap">
      <div class="item" v-for="item in  tabs" :key="item.id" >
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

:deep(.el-carousel){
  min-width: 91vw;
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
  margin-top: 5vh;
  width: 20vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.item{

}
</style>
