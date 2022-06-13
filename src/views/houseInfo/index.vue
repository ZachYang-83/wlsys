<template>
  <div>
      <div>
        <LeftMenu :items='items'></LeftMenu>
      </div>
      <div>
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
                    index:'building3d',
                    title:'城市建筑面',
                    src:require('assets/houseInfo/building3d.png'),
                },
                {
                    index:'industry',
                    title:'工业园',
                    src:require('assets/houseInfo/industry.png'),
                },
                {
                    index:'fangjia',
                    title:'房价信息',
                    src:require('assets/houseInfo/fangjia.png'),
                },
                {
                    index:'ershoufang',
                    title:'二手房信息',
                    src:require('assets/houseInfo/ershoufang.png'),
                },
            ]
        }
    }
}
</script>

<style>

</style>