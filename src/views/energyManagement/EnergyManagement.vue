<template>
  <div class="energyManagement">
    <!-- 能源管理 -->
    <el-container>
      <el-header class="header">企业能源消耗异常识别系统</el-header>
      <el-main>
          <div class="main-top">
            <div class="earlyWarning-box">
              <div class="earlyWarning-item">本月预警次数</div>
              <div class="earlyWarning-item">本月新增异常</div>
              <div class="earlyWarning-item">能源损失</div>
            </div>
            <div>2</div>
            <div>3</div>
          </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.earlyWarning-item{
  height: 70px;
  background-color: #d27a7a;
  border-radius: 5px;
  padding:0 30px;
  display: flex;
  align-items: center;
  color: white;
}

.earlyWarning-box{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header {
  font-size: 20px;
  display: flex;
  align-items: center;
}

.main-top{
  display: flex;
}
</style>
