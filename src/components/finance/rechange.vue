<template>
  <section>
    <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
           >
          <el-table-column
            prop="play"
            label="店铺名"
             align="center">
          </el-table-column>
          <el-table-column
            prop="count"
            label="日期"
            align="center">
          </el-table-column>
          <el-table-column
            prop="countShow"
            label="充值" align="center">
          </el-table-column>
          <el-table-column
            prop="countHit"
            label="充值来源" align="center">
          </el-table-column>
          <el-table-column
            prop="cpc"
            label="流水号" align="center">
          </el-table-column>
          <el-table-column
            prop="cpm"
            label="订单号" align="center">
          </el-table-column>
        </el-table>
      </div>

      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
           >
          <el-table-column
            prop="play"
            label="店铺名"
             align="center">
          </el-table-column>
          <el-table-column
            prop="count"
            label="日期"
            align="center">
          </el-table-column>
          <el-table-column
            prop="countShow"
            label="消费" align="center">
          </el-table-column>
          <el-table-column
            prop="countHit"
            label="扣费比例" align="center">
          </el-table-column>
        </el-table>
      </div>
  </section>
</template>

<script>
export default {
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style  scoped>
</style>