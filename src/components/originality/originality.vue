<template>
  <section>
      <el-button  @click="dialogFormVisible = true">创建创意组</el-button>
    <!-- 表格 -->
     <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
           >
          <el-table-column
            prop="play"
            label="创意组名"
             align="center">
          </el-table-column>
          <el-table-column
            prop="count"
            label="最大创意数"
            align="center">
          </el-table-column>
          <el-table-column
            prop="countShow"
            label="创建时间" align="center">
          </el-table-column>
          <el-table-column
            prop="countHit"
            label="失效日期" align="center">
          </el-table-column>
          <el-table-column
            prop="cpc"
            label="操作" align="center">
          </el-table-column>
        </el-table>
      </div>







    <!-- 弹出框 -->
    <!-- 创建锦囊 -->
    <el-dialog title="创建创意组" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="输入创意计划组名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="最大创意个数"></el-input>
            </el-form-item>
            <el-form-item>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
              <el-button>永久生效</el-button>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
    <!-- 编辑锦囊 -->
     <el-dialog title="编辑创意组" :visible.sync="dialogFormVisible1">
        <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="输入创意计划组名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="最大创意个数"></el-input>
            </el-form-item>
            <el-form-item>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
              <el-button>永久生效</el-button>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
  </section>
</template>

<script>
export default {
  props:{},
  data(){
    return {
      dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
    }
  },
}
</script>
<style  scoped>
</style>