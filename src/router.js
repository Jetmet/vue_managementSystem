//创建组件

import Home from './components/Home.vue';
import Program_overview from './components/details/Program_overview.vue';
import Programme_detail from './components/details/Programme_detail.vue';
import Global_monitoring from './components/monitoring/global_monitoring'
import Kit from './components/kit/kit.vue';
import ShopList from './components/shopInfomation/shopList.vue';
import ShopInfo from './components/shopInfomation/shopInfo.vue';
import Originality from './components/originality/originality.vue';
import Category from './components/category/category.vue';
import Account from './components/finance/account.vue';
import Rechange from './components/finance/rechange.vue';
import Ditail from './components/finance/detail.vue';
import Audit from './components/finance/audit.vue';
import Contract from './components/contract/contract.vue';
import System from './components/system/system.vue';

//配置路由
const routes = [
    {
        path: '/home',
        redirect: '/program_overview',
        component: Home ,
        children:[
            { path: '/program_overview', component: Program_overview },
            { path: '/programme_detail', component: Programme_detail},
            { path:'/global_monitoring',component:Global_monitoring},
            { path:'/shopList',component:ShopList},
            { path:'/shopInfo',component:ShopInfo},
            { path: '/kit', component: Kit},
            { path: '/originality', component: Originality},
            { path: '/category', component: Category },
            { path: '/account', component: Account},
            { path: '/rechange', component: Rechange},
            { path: '/ditail', component: Ditail},
            { path: '/audit', component: Audit},
            { path: '/contract', component: Contract},
            { path: '/system', component: System},
        ]
    },
    { path: '/', redirect: '/home' }   /*   默认跳转路由*/
];


export default routes;
