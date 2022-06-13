<template>
  <div class="leftMenu" ref="leftMenu">
      <div class="menu-content">
          <el-menu 
            :default-active="toIndex()"
            background-color="rgba(0,0,0,0)"
            text-color="rgb(200,200,200)"
            active-text-color="rgb(200,200,200)"
            mode="horizontal" 
            router
        >
          <template v-for="item in items">
            <el-menu-item :index="item.index" :key="item.index" class="menuItem"> 
                <div class="itemImg">
                    <img :src="item.src" style="width:28px;height:28px;margin:0 auto">
                </div>
                <span class="itemTitle">{{item.title}}</span>
            </el-menu-item>
          </template>
          </el-menu>
      </div>
      <!-- <span class="leftClickSpan" @click="foldClick">
          <i v-if="isFold" class="el-icon-arrow-left"></i>
          <i v-else class="el-icon-arrow-right"></i>
      </span> -->
  </div>
</template>

<script>
export default {
    props: ['items'],
    data(){
        return{
            clickCount:0,
            isFold:true,
        }
    },
    methods:{
        // foldClick(){
        //     var leftBarWidth = this.$refs.leftMenu.clientWidth
        //     console.log(leftBarWidth,(10 - leftBarWidth) + 'px');
        //     if(this.clickCount % 2 == 0){
        //         this.$refs.leftMenu.style.left = (10 - leftBarWidth) + 'px';
        //         this.clickCount++;
        //         // document.getElementsByClassName("mapboxgl-ctrl-bottom-left")[0].style.left = "0px";
        //         // document.getElementById("basemapP").style.left = "10px";
        //         this.isFold = false;
        //     }else{
        //         this.$refs.leftMenu.style.left = '0px';
        //         this.clickCount++;
        //         // document.getElementsByClassName("mapboxgl-ctrl-bottom-left")[0].style.left = "100px";
        //         // document.getElementById("basemapP").style.left = "110px";
        //         this.isFold = true;
        //     }
            
        // },
        toIndex(){
            return this.$route.path.split('/')[2];
        },
    }
}
</script>

<style lang="scss" scoped>
    .leftMenu{
        width:100px;
        height: 100%;
        position:absolute;
        // left:0px;
        background-color: rgba(0, 18, 37, 0.2);
        z-index: 999;

        .menu-content {
            // position: relative;
            padding: 5px 10px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            // margin:auto 0;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            // align-items: center;

            .el-menu.el-menu--horizontal{
                border-bottom:none;
            }

            .el-menu-item *{
                padding:0px !important;
                vertical-align: none !important;
            }

            .el-menu--horizontal>.el-menu-item.is-active{
                border-bottom: none !important;
                background-color: rgba(30, 198, 240, 0.2) !important;
            }
            
            .menuItem{
                list-style-type:none;
                width:100%;
                height:90px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 25px;

                .itemImg{
                    width:50px;
                    height: 50px;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }

                .itemTitle{
                    // color:white;
                    // background: rgb(15, 224, 26);
                    font-size: 12px;
                    height:15px;
                    line-height: 15px;
                    text-align: center;
                    vertical-align: middle;
                    display: table-cell;
                    word-break: keep-all !important;
                }
            }

            
        }

        .leftClickSpan{
            color:#fff;
            right: -3px;
            position: absolute;
            top: 44%;
            cursor: pointer;
            // height:30px;
            // width:100px;
            // border-left:13px solid aqua;
            // border-top:15px solid transparent;
            // border-bottom:15px solid transparent;
        }  
        
    }
</style>