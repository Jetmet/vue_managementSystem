<template>
    <div class="shopList">
        <el-tabs type="border-card">
            <el-tab-pane v-for="(item,index) in titleData" :key="index">
                <span slot="label">
                <i class="el-icon-date"></i> {{item.title}}</span> 
                <div class="title">
                    <div class="inputText">
                        <el-input
                            placeholder="接入时间"
                            suffix-icon="el-icon-d-caret"
                            v-model="inputTime"
                            style="margin-left:4%;"
                            >
                        </el-input>
                        <el-input
                            placeholder="输入店铺名"
                            suffix-icon="el-icon-search"
                            v-model="inputText"
                            style="margin-left:4%;"
                            >
                        </el-input>
                    </div>
                    <el-date-picker
                        v-model="value"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <el-table
                :data='item.tableData'
                style="width: 100%;"
                :header-cell-style="{background:'#eef1f6'}"
                >
                <el-table-column 
                v-for="(jtem,jndex) in item.tableHead" 
                :key="jndex"
                :label="jtem.label"
                :prop="jtem.prop"
                align="center"
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
export default {
    data(){
        return{
            inputTime:'',
            inputText:'',
            value:'',
            titleData:[
               { title:'全部店铺',
                tableHead:[
                {label:'店铺名'},
                {label:'接入时间'},
                {label:'每日预算'},
                {label:'消耗'},
                {label:'展现量'},
                {label:'点击量'},
                {label:'CPC'},
                {label:'CPM'},
                {label:'CTR'},
                {label:'ROI'},
                {label:'余额'},
                {label:'状态'},]
                },
                { title:'我的店铺',
                tableHead:[
                {label:'店铺名'},
                {label:'接入时间'},
                {label:'每日预算'},
                {label:'消耗'},
                {label:'展现量'},
                {label:'点击量'},
                {label:'CPC'},
                {label:'CPM'},
                {label:'CTR'},
                {label:'ROI'},
                {label:'余额'},
                {label:'状态'},]
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.title{
    display:flex;
    justify-content:space-between;
    margin-bottom: 2%;
    .inputText{
        width:40%;
        display:flex;
    }
}
/deep/.el-tabs--border-card {
   border-top:0;
   box-shadow: 
   0px 0px 0px  grey, 
    0px 0px 0px grey, 
    0px 6px 10px grey, 
    0px 2px 0px grey;
   .el-tabs__header{
     background-color: #FFFFFF;}
   }
</style>