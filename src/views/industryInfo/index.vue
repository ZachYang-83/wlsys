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
                    index:'laolinghua',
                    title:'老龄化',
                    src:require('assets/industryInfo/laolinghua.png'),
                },
                {
                    index:'canjiren',
                    title:'残疾人',
                    src:require('assets/industryInfo/canjiren.png'),
                },
                {
                    index:'children',
                    title:'儿童友好建设区',
                    src:require('assets/industryInfo/children.png'),
                },
            ]
        }
    }
}
</script>

<style>

</style>