<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane v-for="(item,index) in titleData" :key="index">
        <span slot="label">
          <i class="el-icon-date"></i> {{item.title}} <span class="dateDy">{{item.dynamicData}}</span></span> 
        <el-table
        :data='item.tableData'
        style="width: 100%;background-color:#F3F6F9;"
         :header-cell-style="{background:'#eef1f6'}"
        >
          <el-table-column 
          v-for="(jtem,jndex) in item.tableHead" 
          :key="jndex"
          :label="jtem.label"
          :prop="jtem.prop"
          style="background-color:#F3F6F9;"
          >
          </el-table-column>
           <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default{
  data(){
    return{
      titleData:[
        {
          title:'CPU异常',
          dynamicData:8,
          tableHead:[
            {label:'时间',prop:'date'},
            {label:'店铺名',prop:'shop'},
            {label:'计划',prop:'plan'},
            {label:'单元',prop:'unit'},
            {label:'CPC',prop:'cpc'},
            {label:'情况描述',prop:'situation'},
          ],
          tableData:[
            {
              date:'2018-2-02-14',
              shop:'中华小字豪',
              plan:'扩大',
              unit:'14单元',
              cpc:'20',
              situation:'装备充足',
              operation:'编辑'
            },
          ]
        },
        {
          title:'创意异常',
          dynamicData:4,
          tableHead:[
            {label:'时间'},
            {label:'店铺名'},
            {label:'创意分组名'},
            {label:'可用创意数'},
          ],
           tableData:[
          ]
        },
        {
          title:'余额异常',
          dynamicData:10,
          tableHead:[
            {label:'时间'},
            {label:'店铺名'},
            {label:'联系人'},
            {label:'联系方式'},
            {label:'钻展余额'},
            {label:'账户余额'},
            {label:'账户类型'},
          ],
           tableData:[
          ]
        },
        {
          title:'登录异常',
          dynamicData:2,
          tableHead:[
            {label:'时间'},
            {label:'店铺名'},
            {label:'联系人'},
            {label:'联系方式'},
            {label:'淘宝账号'},
            {label:'密码'},
          ],
           tableData:[
          ]
        },
        {
          title:'计划不足',
          dynamicData:9,
          tableHead:[
            {label:'时间'},
            {label:'店铺名'},
            {label:'联系人'},
            {label:'联系方式'},
            {label:'已有计划'},
            {label:'剩余坑位'},
          ],
           tableData:[
          ]
        },
        {
          title:'DMP空槽位不足',
          dynamicData:17,
          tableHead:[
            {label:'时间'},
            {label:'店铺名'},
            {label:'联系人'},
            {label:'联系方式'},
            {label:'已使用槽位'},
            {label:'剩余槽位'},
          ],
           tableData:[
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.el-tabs--border-card {
   border:0;
   box-shadow: 0 0 0 0;
   .el-tabs__header{
     border-bottom: 0;
     background-color: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
   }
   .el-tabs__nav{
      width: 100%;
      display: flex;
      .el-tabs__item {
        flex: 1;
        display: flex;
        justify-content: center;
        border-right:1px solid #DCDFE6;
    }
    .el-tabs__item:hover{
      background-color: #20BAF7;
      color:#FFFFFF;
      .dateDy{
        color: red;
      }
    }
   }
}
</style>
