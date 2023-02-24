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
          <div class="frequency-box" ref="frequency">

          </div>
        </div>

        <div class="main-bottom">
          <div class="monitor" ref="monitor"></div>
          <div class="status" ref="status"></div>
          <div>3</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {

  mounted() {
    this.initFrequency();
    this.initMonitor();
    this.initStatus();
  },
  methods: {
    initFrequency() {
      var chartDom = this.$refs.frequency;
      var myChart = echarts.init(chartDom);
      var option;

      const data = [200];
      for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200));
      }
      option = {
        xAxis: {
          max: 'dataMax'
        },
        yAxis: {
          type: 'category',
          data: ['1号机', '2号机', '3号机', '4号机', '5号机'],
          inverse: true,
        },
        series: [
          {
            type: 'bar',
            data: data,
            label: {
              show: false,
              position: 'right',
              valueAnimation: true
            }
          }
        ],
      };
      option && myChart.setOption(option);
    },
    initMonitor(){
      var app = {};

var chartDom = this.$refs.monitor;
var myChart = echarts.init(chartDom);
var option;

const categories = (function () {
  let now = new Date();
  let res = [];
  let len = 10;
  while (len--) {
    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
    now = new Date(+now - 2000);
  }
  return res;
})();
const categories2 = (function () {
  let res = [];
  let len = 10;
  while (len--) {
    res.push(10 - len - 1);
  }
  return res;
})();
const data = (function () {
  let res = [];
  let len = 10;
  while (len--) {
    res.push(Math.round(Math.random() * 1000));
  }
  return res;
})();
const data2 = (function () {
  let res = [];
  let len = 0;
  while (len < 10) {
    res.push(+(Math.random() * 10 + 5).toFixed(1));
    len++;
  }
  return res;
})();
option = {
  title: {
    text: 'Dynamic Data'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#283b56'
      }
    }
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: categories
    },
    {
      type: 'category',
      boundaryGap: true,
      data: categories2
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: 'Price',
      max: 30,
      min: 0,
      boundaryGap: [0.2, 0.2]
    },
    {
      type: 'value',
      scale: true,
      name: 'Order',
      max: 1200,
      min: 0,
      boundaryGap: [0.2, 0.2]
    }
  ],
  series: [
    {
      name: 'Dynamic Bar',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: data
    },
    {
      name: 'Dynamic Line',
      type: 'line',
      data: data2
    }
  ]
};
app.count = 11;
setInterval(function () {
  let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
  data.shift();
  data.push(Math.round(Math.random() * 1000));
  data2.shift();
  data2.push(+(Math.random() * 10 + 5).toFixed(1));
  categories.shift();
  categories.push(axisData);
  categories2.shift();
  categories2.push(app.count++);
  myChart.setOption({
    xAxis: [
      {
        data: categories
      },
      {
        data: categories2
      }
    ],
    series: [
      {
        data: data
      },
      {
        data: data2
      }
    ]
  });
}, 2100);

option && myChart.setOption(option);

    },
    initStatus(){
      var chartDom = this.$refs.status;
var myChart = echarts.init(chartDom);
var option;

option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
};

option && myChart.setOption(option);
    }
  }

}
</script>

<style>
.monitor {
  width: 500px;
  height: 280px;
}

.main-bottom {
  display: flex;
  margin-top: 40px;
}

.frequency-box {
  width: 500px;
  height: 280px;
}

.status{
  width: 500px;
  height: 260px;
}

.earlyWarning-item {
  height: 70px;
  background-color: #d27a7a;
  border-radius: 5px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  color: white;
}

.earlyWarning-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header {
  font-size: 20px;
  display: flex;
  align-items: center;
}

.main-top {
  display: flex;
}
</style>
