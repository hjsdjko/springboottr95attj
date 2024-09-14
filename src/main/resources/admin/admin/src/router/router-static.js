import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import qiye from '@/views/modules/qiye/list'
    import gerenjianli from '@/views/modules/gerenjianli/list'
    import zhaopinzhiwei from '@/views/modules/zhaopinzhiwei/list'
    import zhaopinzhinan from '@/views/modules/zhaopinzhinan/list'
    import qiuzhizhe from '@/views/modules/qiuzhizhe/list'
    import zaixianzixun from '@/views/modules/zaixianzixun/list'
    import qiyegonggao from '@/views/modules/qiyegonggao/list'
    import storeup from '@/views/modules/storeup/list'
    import yingpinxinxi from '@/views/modules/yingpinxinxi/list'
    import xuanjianghui from '@/views/modules/xuanjianghui/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/qiye',
        name: '企业',
        component: qiye
      }
      ,{
	path: '/gerenjianli',
        name: '个人简历',
        component: gerenjianli
      }
      ,{
	path: '/zhaopinzhiwei',
        name: '招聘职位',
        component: zhaopinzhiwei
      }
      ,{
	path: '/zhaopinzhinan',
        name: '招聘指南',
        component: zhaopinzhinan
      }
      ,{
	path: '/qiuzhizhe',
        name: '求职者',
        component: qiuzhizhe
      }
      ,{
	path: '/zaixianzixun',
        name: '在线咨询',
        component: zaixianzixun
      }
      ,{
	path: '/qiyegonggao',
        name: '企业公告',
        component: qiyegonggao
      }
      ,{
	path: '/storeup',
        name: '我的收藏',
        component: storeup
      }
      ,{
	path: '/yingpinxinxi',
        name: '应聘信息',
        component: yingpinxinxi
      }
      ,{
	path: '/xuanjianghui',
        name: '宣讲会',
        component: xuanjianghui
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
