<template>
  <div class="rightContent">
      <MapboxMap></MapboxMap>
  </div>
</template>

<script>
import MapboxMap from 'components/layout/mapboxMap.vue'
export default {
  components:{
    MapboxMap
  }
}
</script>

<style>
    .rightContent {
        width: 100%;
        height: 100%;
        /* background: #001225; */
    }
</style>