<template>
  <section>
      <el-button  @click="dialogFormVisible = true">创建类目</el-button>
    <!-- 表格 -->
     <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
           >
          <el-table-column
            prop="play"
            label="类目"
             align="center">
          </el-table-column>
          <el-table-column
            prop="count"
            label="创建时间"
            align="center">
          </el-table-column>
          <el-table-column
            prop="countShow"
            label="锦囊个数" align="center">
          </el-table-column>
          <el-table-column
            prop="countHit"
            label="备注" align="center">
          </el-table-column>
          <el-table-column
            prop="cpc"
            label="操作" align="center">
          </el-table-column>
        </el-table>
      </div>







    <!-- 弹出框 -->
    <!-- 创建类目 -->
    <el-dialog title="创建类目" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="类目名一级类目？？"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="备注"></el-input>
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
              <el-input v-model="form.name" autocomplete="off" placeholder="类目名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="备注"></el-input>
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