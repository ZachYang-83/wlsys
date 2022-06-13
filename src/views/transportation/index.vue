<template>
  <div>
      <div>
        <LeftMenu :items='items'></LeftMenu>
      </div>
      <div >
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import LeftMenu from 'components/layout/LeftMenu.vue'
export default {
    components:{
        LeftMenu,
    },
    data(){
        return{
            items:[
                {
                    index:'truckLogistics',
                    title:'货车物流OD分布',
                    src:require('assets/transportation/truckLogistics.png'),
                },
                {
                    index:'countyTruck',
                    title:'市县级货车OD',
                    src:require('assets/transportation/countyTruck.png'),
                },
                {
                    index:'trafficAreaOD',
                    title:'交通小区货车OD',
                    src:require('assets/transportation/trafficAreaOD.png'),
                },
                {
                    index:'timeCircle',
                    title:'等时圈分析',
                    src:require('assets/transportation/timeCircle.png'),
                },
                {
                    index:'mobileTruck',
                    title:'摩拜单车轨迹',
                    src:require('assets/transportation/mobileTruck.png'),
                },
                {
                    index:'gzhuoyunOD',
                    title:'广州货运OD',
                    src:require('assets/transportation/GZhuoyunOD.png'),
                },
                {
                    index:'cargoFlowOD',
                    title:'全省货流OD',
                    src:require('assets/transportation/cargoFlowOD.png'),
                },
                {
                    index:'passengerOD',
                    title:'全省客流OD',
                    src:require('assets/transportation/PassengerOD.png'),
                },
                {
                    index:'roadTraffic',
                    title:'路段流量',
                    src:require('assets/transportation/roadTraffic.png'),
                },
                
            ]
        }
    }
}
</script>

<style>
</style>