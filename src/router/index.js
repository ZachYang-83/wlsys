import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from 'components/layout/Home.vue'
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('components/layout/Home.vue'),
    mate:{
      title:'整体页面布局'
    },
    children:[
      {
        path:'/population',
        component:() => import('views/population/index.vue'),
        meta:{
          title:'人口感知',
        },
        redirect:'/population/queryMap',
        children:[
          {
            path:'queryMap',
            component:() => import('views/population/QueryMap.vue'),
            meta:{
              title:'人口画像查询',
            }
          },
          {
            path:'graduateMap',
            component:() => import('views/population/GraduateMap.vue'),
            meta:{
              title:'大学生人口画像',
            }
          },
          {
            path:'census',
            component:() => import('views/population/Census.vue'),
            meta:{
              title:'人口普查',
            }
          },
          {
            path:'timeSharding',
            component:() => import('views/population/TimeSharding.vue'),
            meta:{
              title:'分时人口统计',
            }
          },
          {
            path:'countyInfo',
            component:() => import('views/population/CountyInfo.vue'),
            meta:{
              title:'村界人口概览',
            }
          },
          {
            path:'bigBay',
            component:() => import('views/population/BigBay.vue'),
            meta:{
              title:'大湾区人口OD',
            }
          },
          {
            path:'guangdongOD',
            component:() => import('views/population/GuangdongOD.vue'),
            meta:{
              title:'市县级人口OD'
            }
          },
          {
            path:'carInduChain',
            component:() => import('views/population/CarInduChain.vue'),
            meta:{
              title:'汽车产业链',
            }
          },
          {
            path:'transportationOD',
            component:() => import('views/population/TransportationOD.vue'),
            meta:{
              title:'交通小区人口OD',
            }
          },
        ]
      },
      {
        path:'/transportation',
        component:() => import('views/transportation/index.vue'),
        meta:{
          title:'交通特征',
        },
        redirect:'/transportation/truckLogistics',
        children:[
          {
            path:'truckLogistics',
            component:() => import('views/transportation/TruckLogistics.vue'),
            meta:{
              title:'货车物流OD分布',
            }
          },
          {
            path:'countyTruck',
            component:() => import('views/transportation/CountyTruck.vue'),
            meta:{
              title:'市县级货车OD',
            }
          },
          {
            path:'trafficAreaOD',
            component:() => import('views/transportation/TrafficAreaOD.vue'),
            meta:{
              title:'交通小区货车OD',
            }
          },
          {
            path:'timeCircle',
            component:() => import('views/transportation/TimeCircle.vue'),
            meta:{
              title:'等时圈分析',
            }
          },
          {
            path:'mobileTruck',
            component:() => import('views/transportation/MobileTrack.vue'),
            meta:{
              title:'摩拜单车轨迹',
            }
          },
          {
            path:'gzhuoyunOD',
            component:() => import('views/transportation/GZhuoyunOD.vue'),
            meta:{
              title:'广州货运OD',
            }
          },
          {
            path:'cargoFlowOD',
            component:() => import('views/transportation/CargoFlowOD.vue'),
            meta:{
              title:'全省货流OD',
            }
          },
          {
            path:'passengerOD',
            component:() => import('views/transportation/PassengerOD.vue'),
            meta:{
              title:'全省客流OD',
            }
          },
          {
            path:'roadTraffic',
            component:() => import('views/transportation/RoadTraffic.vue'),
            meta:{
              title:'路段流量',
            }
          },
        ]
      },
      {
        path:'/landUse',
        component:() => import('views/landUse/index.vue'),
        meta:{
          title:'用地信息',
        },
        redirect:'/landUse/lu1995',
        children:[
          {
            path:'lu1995',
            component:() => import('views/landUse/LU1995.vue'),
            meta:{
              title:'土地利用1995',
            }
          },
          {
            path:'lu2000',
            component:() => import('views/landUse/LU2000.vue'),
            meta:{
              title:'土地利用2000',
            }
          },
          {
            path:'lu2005',
            component:() => import('views/landUse/LU2005.vue'),
            meta:{
              title:'土地利用2005',
            }
          },
          {
            path:'lu2010',
            component:() => import('views/landUse/LU2010.vue'),
            meta:{
              title:'土地利用2010',
            }
          },
          {
            path:'lu2015',
            component:() => import('views/landUse/LU2015.vue'),
            meta:{
              title:'土地利用2015',
            }
          },
        ]
      },
      {
        path:'/publicInfo',
        component:() => import('views/publicInfo/index.vue'),
        meta:{
          title:'用地信息',
        },
        redirect:'/publicInfo/eduInfo',
        children:[
          {
            path:'roadInfo',
            component:() => import('views/publicInfo/RoadInfo.vue'),
            meta:{
              title:'道路设施',
            }
          },
          {
            path:'eduInfo',
            component:() => import('views/publicInfo/EduInfo.vue'),
            meta:{
              title:'教育设施',
            }
          },
          {
            path:'medInfo',
            component:() => import('views/publicInfo/MedInfo.vue'),
            meta:{
              title:'医疗设施',
            }
          },
          {
            path:'civInfo',
            component:() => import('views/publicInfo/CivInfo.vue'),
            meta:{
              title:'民政设施',
            }
          },
          {
            path:'palInfo',
            component:() => import('views/publicInfo/PalInfo.vue'),
            meta:{
              title:'政法设施',
            }
          },
          {
            path:'culInfo',
            component:() => import('views/publicInfo/CulInfo.vue'),
            meta:{
              title:'文化设施',
            }
          },
          {
            path:'sportInfo',
            component:() => import('views/publicInfo/SportInfo.vue'),
            meta:{
              title:'体育设施',
            }
          },
          {
            path:'marketInfo',
            component:() => import('views/publicInfo/MarketInfo.vue'),
            meta:{
              title:'批发市场',
            }
          },
        ]
      },
      {
        path:'/houseInfo',
        component:() => import('views/houseInfo/index.vue'),
        meta:{
          title:'房屋信息',
        },
        redirect:'/houseInfo/building3d',
        children:[
          {
            path:'building3d',
            component:() => import('views/houseInfo/Building3d.vue'),
            meta:{
              title:'城市建筑面',
            }
          },
          {
            path:'industry',
            component:() => import('views/houseInfo/Industry.vue'),
            meta:{
              title:'工业园',
            }
          },
          {
            path:'fangjia',
            component:() => import('views/houseInfo/Fangjia.vue'),
            meta:{
              title:'fangjia',
            }
          },
          {
            path:'ershoufang',
            component:() => import('views/houseInfo/Ershoufang.vue'),
            meta:{
              title:'ershoufang',
            }
          },
        ]
      },
      {
        path:'/industryInfo',
        component:() => import('views/industryInfo/index.vue'),
        meta:{
          title:'房屋信息',
        },
        redirect:'/industryInfo/laolinghua',
        children:[
          {
            path:'canjiren',
            component:() => import('views/industryInfo/Canjiren.vue'),
            meta:{
              title:'残疾人',
            }
          },
          {
            path:'laolinghua',
            component:() => import('views/industryInfo/Laolinghua.vue'),
            meta:{
              title:'老龄化',
            }
          },
          {
            path:'children',
            component:() => import('views/industryInfo/Children.vue'),
            meta:{
              title:'儿童友好建设区',
            }
          },
        ]
      },
    ]
  }
 ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
