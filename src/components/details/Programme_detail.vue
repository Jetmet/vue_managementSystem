<template>
  <div class="programme_detail" style="width:100%;">
    <div class="titleTab" style="x-index:999;">
      <div class="tabChoose">
        <i class="el-icon-picture-outline-round" @click="tableCl" :class="{active:isActiveTb}"></i>
        <i class="el-icon-minus"></i>
        <i class="el-icon-s-unfold" @click="chartCl" :class="{active:isActiveCH}"></i>
      </div>
      <div class="titleRight">
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
        <el-button  @click="centerDialogVisible = true">自定义展现列</el-button>
        <!-- 筛选列表 -->
        <el-dialog
          title="自定义展现列"
          :visible.sync="centerDialogVisible"
          width="30%">
          <div style="background-color:#F3F6F9;padding:2%;">
            <div>
              <el-checkbox  label="choseDefault" v-model="checked" @change="clickDefualt">默认</el-checkbox>
              <el-checkbox label="chooseAll" v-model="checkAll" @change='clickAll'>全部</el-checkbox>
            </div>
            <el-checkbox-group v-model="formThead">
              <el-checkbox v-for="(item,index) in col" :label="item.label" :key="index">
                {{item.label}}
              </el-checkbox>
            </el-checkbox-group>
          </div>
          <div slot="footer" class="dialog-footer" style="display:flex;justify-content:center;">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
    <div class="prMainTable" v-show="tableHidden">
      <!-- 表格信息 -->
      <el-table :data="tableData"
        row-key="id"
        style="box-shadow: #ccc 0px 0px 6px;"
        align='center'>
        <el-table-column label="时间" prop='time'></el-table-column>
        <el-table-column label="类型"  prop='typeTable'></el-table-column>
        <el-table-column v-for="(item,index) in formThead"
          :key="index"
          :label='item'>
        </el-table-column>
      </el-table>
    </div>
    <div class="prMainChart" v-show="chartHidden" style="clear:both;width:100%;padding:2%;">
      <div id="echarts" :style="{width: '1400px', height: '400px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:{},
  data(){
    return {
      tableHidden:true,
      chartHidden:false,
      isActiveTb:true,
      isActiveCH:false,
      timeValue:'',
      checked:true,
      checkAll:false,
      centerDialogVisible: false,//自定义展现列
      formThead:['消耗','CPC','CPM','CTR','展现量','点击量'],//筛选列表表头数据
      tableData:[
        {time:'',typeTable:'店铺自建'},
        {time:'2018.5.23',typeTable:'锦囊妙计'},
        {time:'',typeTable:'全店'},
      ],//表体数据
      col:[//未筛选列表数据
        {
          label:'消耗',
          prop:'consume'
        },
        {
          label:'CPC',
          prop:'cpc'
        },
        {
          label:'CPM',
          prop:'cpm'
        },
        {
          label:'CTR',
          prop:'ctr'
        },
        {
          label:'展现量',
          prop:'impressions'
        },
        {
          label:'点击量',
          prop:'clickRate'
        },
        {
          label:'点击转化率',
          prop:'clickConversionRate'
        },
        {
          label:'加购数',
          prop:'purchaseNumber'
        },
        {
          label:'加购成本',
          prop:'purchaseCost'
        },
        {
          label:'店铺收藏数',
          prop:'storeCollection'
        },
        {
          label:'店铺收藏成本',
          prop:'storeCollectionCost'
        },
        {
          label:'宝贝收藏数',
          prop:'treasureCollection'
        },
        {
          label:'收藏加购率',
          prop:'collectionPlus '
        },
        {
          label:'拍下订单数',
          prop:'takeOrders'
        },
        {
          label:'拍下订单成本',
          prop:'orderCost'
        },
        {
          label:'成交订单数',
          prop:'closedOrder'
        },
        {
          label:'成交订单金额',
          prop:'amountOrder'
        },
        {
          label:'ROI',
          prop:'roi'
        },
      ]
    }
  },
  mounted(){
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
  methods:{
    //图表点击事件
    tableCl(){
      if (!this.tableHidden) {
        this.tableHidden=true;
        this.chartHidden=false;
        this.isActiveTb=true;
        this.isActiveCH=false;
      }
    },
    //表格点击事件
    chartCl(){
      if (!this.chartHidden) {
        this.tableHidden=false;
        this.chartHidden=true;
        this.isActiveTb=false;
        this.isActiveCH=true;
      }
    },
    //默认点击事件
    clickDefualt(val){
      if(!this.checked){
        this.checked=false;
        this.formThead=[];
      }else{
        this.checked=true;
        this.formThead=['消耗','CPC','CPM','CTR','展现量','点击量'];
      }
    },
    //全部点击事件
    clickAll(){
      if(this.checkAll){
        this.checkAll=true;
        this.formThead=['消耗','CPC','CPM','CTR',
                        '展现量','点击量','点击转化率',
                        '加购数','加购成本','店铺收藏数',
                        '店铺收藏成本','宝贝收藏数','收藏加购率',
                        '拍下订单数','拍下订单成本','成交订单数',
                        '成交订单金额','ROI',
                      ];
      }else{
        this.checkAll=false;
        this.formThead=[];
      }
    },
    //echart图表

  }
}
</script>
<style  scoped lang="less">
.programme_detail{
  .titleTab{
    height:52px;
    display:flex;
    padding:0 2%;
    align-items:center;
    justify-content:space-between;
    margin-bottom:2%;
    width:80%;
    box-shadow: #ccc 0px 0px 6px;
    float:right;
    .tabChoose{
      i{font-size:32px;}
      .active{color:#469EF6;}
    }
  }

}
</style>
