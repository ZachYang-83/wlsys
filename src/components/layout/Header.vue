<template>
  <div class="header">
    <div class="menu">
      <el-menu 
      :default-active="toIndex()"
      background-color="rgba(0,0,0,0)"
      text-color="rgb(200,200,200)"
      active-text-color="#409EFF"
      mode="horizontal" 
      @select="handleSelect"
     >
     <template v-for="item in items">
       <el-menu-item :index="item.index" :key="item.index">
         <!-- <template slot="title"> -->
           <span slot="title">{{item.title}}</span>
         <!-- </template> -->
       </el-menu-item>
     </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items:[
          {index: 'population',title: '人口感知'},
          {index: 'transportation',title: '交通特征'},
          {index: 'publicInfo',title: '基础设施'},
          {index: ' ',title: ' '},
          {index: 'landUse',title: '用地信息'},
          {index: 'houseInfo',title: '房屋信息'},
          {index: 'industryInfo',title: '无障碍服务'},
        ]
      };
    },
    methods: {
      toIndex() {
            console.log(this.$route.path.split('/')[1]);
            return this.$route.path.split('/')[1];
        },
      handleSelect(index) {
        this.$parent.showSiderBar();
        console.log(this.$router,'router');
        this.$router.push('/' + index);
        // document.getElementsByClassName("mapboxgl-ctrl-bottom-left")[0].style.left = "100px";
        // document.getElementById("basemapP").style.left = "110px";
      }
    }
}
</script>

<style lang="scss" scoped>

    .header{
        display: flex;
        width: 100%;
        height: 100px;
        min-height: 100px;
        max-height: 100px;
        background: url('~assets/layout/header.png')  no-repeat #001225;
        background-size: 100% 100%;
        justify-content: center;
        align-items: center;
    }

    .menu{
      width: 100%;
      height: 100%;
      // min-width: 1920px;
      display: flex;
      // justify-content: space-around;
      align-items: center;
    }

    .el-menu {
      width: 100%;
      height:50%;
      // min-width: 1920px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: none !important;
      text-decoration: none !important;
    }

    .el-menu-item {  
      width: 7%;
      height: 70% !important;
      line-height: 70% !important;
      border-bottom: none !important;
      background-color: #001225;
      background: linear-gradient(to left,#17C5A5,#17C5A5)
          left top no-repeat,
        linear-gradient(to bottom, #17C5A5, #17C5A5) left
          top no-repeat,
        // linear-gradient(to left, #17C5A5, #17C5A5) right
        //   top no-repeat,
        // linear-gradient(to bottom, #17C5A5, #17C5A5) right
        //   top no-repeat,
        // linear-gradient(to left, #17C5A5, #17C5A5) left
        //   bottom no-repeat,
        // linear-gradient(to bottom, #17C5A5, #17C5A5) left
          bottom no-repeat,
        linear-gradient(to left, #17C5A5, #17C5A5) right
          bottom no-repeat,
        linear-gradient(to left, #17C5A5, #17C5A5) right
          bottom no-repeat;
      /*设置大小*/
      background-size:1px 6px,6px 1px;
      // padding:0px 5px;
      // margin-left: 20px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size:120%;
    } 
    
    .el-menu-item:nth-child(4){
      margin-left: 0px !important;
    }

     .el-menu-item:nth-child(4) {
      width: 50% !important;
      background-image: none !important;
    }

    .el-menu-item:hover{  
      background-color: rgba(0,0,0,0) !important;
      outline: none !important;  
      // color: #409EFF !important;   
    }  

    .el-menu--horizontal>.el-menu-item.is-active{
      border-bottom: none !important;
      background-color: rgba(200, 200, 200, 0) !important;
    }

</style>