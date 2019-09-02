<template>
  <section>
    <!-- 表格 -->
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
           >
          <el-table-column
            prop="play"
            label="计划"
             align="center">
          </el-table-column>
          <el-table-column
            prop="count"
            label="总消耗"
            align="center">
          </el-table-column>
          <el-table-column
            prop="countShow"
            label="总展现" align="center">
          </el-table-column>
          <el-table-column
            prop="countHit"
            label="总点击" align="center">
          </el-table-column>
          <el-table-column
            prop="cpc"
            label="CPC" align="center">
          </el-table-column>
          <el-table-column
            prop="cpm"
            label="CPM" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="CTR" align="center">
          </el-table-column>
        </el-table>
      </div>
      <div class="curve">
        <div class="table_head">
          <div class="select">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="date">
              <el-date-picker
                type="daterange"
                v-model="timeValue"
                align="right"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                >
              </el-date-picker>
            </div>
        </div>
        <div id="echarts" :style="{width: '100%', height: '400px'}"></div>
      </div>
  </section>
</template>

<script>
export default {
  props:{},
  data(){
    return {
      timeValue:'',
       tableData: [{
            play: '锦囊妙计',
          }, {
            play: '店铺自建',
          }, {
            play: '全局详情',
          }],
        options: [{
          value: '选项1',
          label: '消耗'
        }, {
          value: '选项2',
          label: '展现量'
        }, {
          value: '选项3',
          label: '点击量'
        }, {
          value: '选项4',
          label: 'CPC'
        }, {
          value: '选项5',
          label: 'CPM'
        }, {
          value: '选项6',
          label: 'CTR'
        }],
        value: '选项1'
    }
  },
  mounted() {
      var dom = document.getElementById('echarts')
      var myChart = this.echarts.init(dom)
      // 绘制图表
      myChart.setOption({
        tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['锦囊妙计','统计','店铺自建']
    },
    toolbox: {
        show : true,
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['00：00','02：00','04：00','06：00','08：00','10：00','12：00','14：00','16：00','18：00','20：00','22：00','24：00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            data:['0','200','400','600']
        }
    ],
    series : [

        {
            name:'统计',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 130, 110,330,190]
        },
          {
            name:'锦囊妙计',
            type:'line',
            stack: '总量',
            data:[20, 132, 301, 134, 90, 230, 210,191,320]
        },
        {
            name:'店铺自建',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 90, 130, 110,191,240]
        }
    ]
      });
    },

}
</script>
<style  scoped lang="scss">

  section{

      .table{
        border-radius: 8px;
        background-color: #fff;
        box-shadow: #ccc 0px 0px 6px;
        text-align: center;
        table{text-align: center;}
      }
}
.curve{
  margin-top: 20px;
  background: #fff;

  position: relative;
  .table_head{
    padding:10px;
    height: 40px;
    background-color:#f3f6f9 ;
    .select{position: absolute;left: 10px;}
    .date{position: absolute;right: 10px;}
  }

}
</style>
