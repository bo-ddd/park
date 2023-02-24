<template>
    <main class="flex-center">
      <div class="logo">
        <div class="titles flex-center">
          <!-- <img src="@/assets/images/icon-bj_2.png" alt="" /> -->
          <span>登录</span>
        </div>
        <div class="content">
          <div class="content-left shadow">
            <img src="@/assets/images/icon-bj_2.png" alt="" />
          </div>
          <div class="content-right">
            <el-input
              placeholder="用户名"
              prefix-icon="el-icon-user-solid"
              
            ></el-input>
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-key"
             
              show-password
            ></el-input>
            <div class="label" >没有账号？去注册一个</div>
            <el-button type="primary" >登 &nbsp; 录</el-button>
          </div>
        </div>
      </div>
    </main>
  </template>
  <style scoped>
  main {
    width: 100%;
    height: 100vh;
    background: url('http://121.5.53.216/jpg/bg.f1d2fdc8.jpg') no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
  }
  
  .logo {
    width: 828px;
    height: 422px;
    background: #fff;
    opacity: .85;
    border-radius: 10px;
  }
  
  .titles {
    display: flex;
    margin: 30px 0;
    font-size: 26px;
    justify-content: center;
    font-family: "Times New Roman", Times, serif;
    font-weight: 600;
  }
  
  .titles img {
    width: 100px;
  }
  
  .titles span {
    color: black;
    font-size: 2.8rem;
  }
  
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  
  .content-left img {
    width: 250px;
    height: 168px;
    padding: 2rem;
  }
  
  .el-input {
    margin: 10px 0;
  }
  
  .content-right {
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .el-button {
    margin: 10px 0;
    background-color: #6b3fbe;
    border-color: #6b3fbe;
  }
  
  .label {
    padding: 10px 0;
    color: #6b3fbe;
    font-size: 12px;
  }
  </style>