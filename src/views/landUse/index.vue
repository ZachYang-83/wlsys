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
                    index:'lu1995',
                    title:'土地利用1995',
                    src:require('assets/landUse/lu1995.png'),
                },
                {
                    index:'lu2000',
                    title:'土地利用2000',
                    src:require('assets/landUse/lu2000.png'),
                },
                {
                    index:'lu2005',
                    title:'土地利用2005',
                    src:require('assets/landUse/lu2005.png'),
                },
                {
                    index:'lu2010',
                    title:'土地利用2010',
                    src:require('assets/landUse/lu2010.png'),
                },
                {
                    index:'lu2015',
                    title:'土地利用2015',
                    src:require('assets/landUse/lu2015.png'),
                },
            ]
        }
    }
}
</script>

<style>

</style>