<template>
  <section>
     <div class="select">
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item>
              <el-input placeholder="输入店铺名"></el-input>
          </el-form-item>
          <el-form-item>
            <i class="el-icon-search"></i>
          </el-form-item>
        </el-form>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
           >
          <el-table-column
            prop="play"
            label="平台"
             align="center">
          </el-table-column>
          <el-table-column
            prop="count"
            label="联系人"
            align="center">
          </el-table-column>
          <el-table-column
            prop="countShow"
            label="手机号" align="center">
          </el-table-column>
          <el-table-column
            prop="countHit"
            label="店铺名" align="center">
          </el-table-column>
          <el-table-column
            prop="cpc"
            label="淘宝账号" align="center">
          </el-table-column>
          <el-table-column
            prop="cpm"
            label="密码" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="行业" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="类目" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="公司名称" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="钻匠账号" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="钻匠密码" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="已开通服务" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="接入时间" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="合同编号" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="负责人" align="center">
          </el-table-column>
          <el-table-column
            prop="ctr"
            label="操作" align="center">
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
      options: [{
          value: '选项1',
          label: '平台'
        }, {
          value: '选项2',
          label: '接入时间'
        }, {
          value: '选项3',
          label: '联系人'
        }, {
          value: '选项4',
          label: '手机号'
        }, {
          value: '选项5',
          label: '淘宝账号'
        }, {
          value: '选项6',
          label: '店铺名'
        }, {
          value: '选项7',
          label: '行业'
        }, {
          value: '选项8',
          label: '类目'
        }, {
          value: '选项9',
          label: '服务'
        }, {
          value: '选项10',
          label: '公司名称'
        }],
        value: '选项1'
    }
  },
}
</script>
<style  scoped>
</style>