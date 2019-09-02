<template>
  <section>
      <el-button  @click="dialogFormVisible = true">创建锦囊</el-button>
    <!-- 表格 -->
     <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
           >
          <el-table-column
            prop="play"
            label="锦囊名称"
             align="center">
          </el-table-column>
          <el-table-column
            prop="count"
            label="创建时间"
            align="center">
          </el-table-column>
          <el-table-column
            prop="countShow"
            label="目标" align="center">
          </el-table-column>
          <el-table-column
            prop="countHit"
            label="关联方式" align="center">
          </el-table-column>
          <el-table-column
            prop="cpc"
            label="操作方式" align="center">
          </el-table-column>
        </el-table>
      </div>







    <!-- 弹出框 -->
    <!-- 创建锦囊 -->
    <el-dialog title="创建锦囊" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="输入锦囊名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="输入锦囊目标"></el-input>
            </el-form-item>
            <el-form-item>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
              <el-button>永久生效</el-button>
            </el-form-item>
            <el-form-item label="选择关联方式" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="关联方式">
                <el-option label="类目" value="shanghai"></el-option>
                <el-option label="锦囊" value="beijing"></el-option>
              </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
    <!-- 编辑锦囊 -->
     <el-dialog title="编辑锦囊" :visible.sync="dialogFormVisible1">
        <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="输入锦囊名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.name" autocomplete="off" placeholder="输入目标"></el-input>
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
    <!-- 关联锦囊 -->
    <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value4"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
  </div>
  </section>
</template>

<script>
export default {
  props:{},
  data(){
//店铺关联
    const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
    return {
      //锦囊编辑
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
        }],
        value: '选项1',

// 店铺关联
        data: generateData(),
        value3: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
    
    }
  },
}
</script>
<style  scoped lang="scss">
.transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>