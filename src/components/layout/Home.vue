<template>
  <div class="home">
      <Header></Header>
        <div class="main">
            <div v-if="showSider" class="siderBar">
                <router-view></router-view>
            </div>
            <div class="contentBar">
                <RightContent></RightContent>
            </div>
        </div>
  </div>
</template>

<script>

import Header from 'components/layout/Header.vue'
// import LeftMenu from 'components/layout/LeftMenu.vue'
import RightContent from 'components/layout/RightContent.vue'
export default {
    data(){
        return{
            showSider:false,
        }
    },
    components:{
        Header,
        RightContent,
    },
    methods:{
        showSiderBar(){
            console.log(this.showSider,'shoubar');
            this.showSider = true;
        }
    }
}
</script>

<style lang="scss">
    .home{
        width: 100%;
        height: 100%;

        .main{
            position: relative;
            display: flex;
            width: 100%;
            height: calc(100% - 100px);
            // background: rgb(228,98,11);

            .contentBar{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>>       

</style>