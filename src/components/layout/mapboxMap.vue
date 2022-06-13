<template>
  <div id="container" class="container">
    <div id="basemapP">
      <div v-if="isFold" class="basemap1" @click="selectLayer">
        <img
          :src="currentMap"
          style="width: 90%; height: 90%; borderradius: 20px"
        />
      </div>
      <div v-else class="basemap2">
        <div class="foldSpan" @click="selectLayer">
          <img
            src="~assets/map/fold.png"
            alt=""
            style="width: 75%; height: 75%"
          />
        </div>
        <div class="mapword">底图<br />风格</div>
        <template v-for="item in mapStylies">
          <li
            :index="item.index"
            :key="item.index"
            class="mapItems"
            @click="selectMap(item)"
          >
            <img
              :src="item.img"
              style="width: 90%; height: 90%; borderradius: 20px"
            />
          </li>
        </template>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="beian">
        Copyright @2022 | 
        <span class="beianhao"  @click="toGongXinBu">粤ICP备2021127178号</span>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
window.mapbox = mapboxgl;

const geoqMap = {
  version: 8,
  glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  sources: {
    mapsource: {
      type: "raster",
      tiles: [
        "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      ],
      tileSize: 256,
    },
  },
  layers: [
    {
      id: "mapsource",
      type: "raster",
      source: "mapsource",
      minzoom: 0,
      maxzoom: 18,
    },
  ],
};
export default {
  data() {
    return {
      currentMap: require("assets/map/blue.png"),
      mapStylies: [
        // {
        //   index: "satellite",
        //   title: "卫星",
        //   img: require("assets/map/satellite.png"),
        //   style: "mapbox://styles/mapbox/satellite-v9",
        // },
        {
          index: "dark",
          title: "幻影黑",
          img: require("assets/map/dark.png"),
          style: "mapbox://styles/mapbox/dark-v10",
        },
        {
          index: "light",
          title: "远山黛",
          img: require("assets/map/light.png"),
          style: "mapbox://styles/mapbox/light-v10",
        },
        {
          index: "outdoor",
          title: "草色青",
          img: require("assets/map/outdoor.png"),
          style: "mapbox://styles/mapbox/outdoors-v11",
        },
        {
          index: "geoq",
          title: "极夜蓝",
          img: require("assets/map/blue.png"),
          style: geoqMap,
        },
      ],
      isFold: true,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiemFjaHlhbmc4MyIsImEiOiJja211MjRsbm4waXMwMm5wZDE3d3BuZjBuIn0.lcRS0kbOWjzFw-UikwbyHQ";
      window.MAP = new mapboxgl.Map({
        container: "container",
        // style: "mapbox://styles/mapbox/dark-v9",
        // style:"mapbox://styles/mapbox/navigation-night-v1",
        style: geoqMap,
        center: [113.35, 22.9],
        attributionControl: false,
        zoom: 6.5,
        antialias: false,
        // pitch: 60,
        // bearing: -5,
      });
      window.MAP.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    },

    selectLayer() {
      this.isFold = !this.isFold;
    },

    selectMap(item) {
      this.currentMap = item.img;
      this.isFold = !this.isFold;
      window.MAP.setStyle(item.style);
    },

    toGongXinBu() {
      window.open("https://beian.miit.gov.cn/#/Integrated/index", "_blank");
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  position: relative;

  #basemapP {
    position: absolute;
    bottom: 10px;
    right: 15px;
    z-index: 99;

    .basemap1 {
      width: 42px;
      height: 42px;
      background-color: rgba(82, 227, 164, 0.9);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .basemap2 {
      width: fit-content;
      height: 44px;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      li {
        list-style: none;
      }

      .foldSpan {
        height: 100%;
        float: left;
        margin: 0 5px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        // background-color: antiquewhite;
      }

      .mapword {
        height: 100;
        float: left;
        vertical-align: middle;
      }

      .mapItems {
        width: 39px;
        height: 90%;
        border-radius: 10px;
        float: left;
        margin: 0 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: antiquewhite;
      }

      .mapItems:hover {
        background-color: aquamarine;
      }
    }
  }

  .footer-copyright {
    position: absolute;
    bottom: 0px;
    left: 25%;
    width: 50%;
    height: 30px;
    // background-color: aquamarine;
    z-index: 9999;
    display: flex;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    line-height: 30px;
    font-size: 18px;

    .beian {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      line-height: 30px;
      font-size: 18px;
      cursor: pointer;
    }
  }
}

.mapboxgl-ctrl-bottom-right {
  right: 5px;
  bottom: 50px;

  .mapboxgl-ctrl-group {
    width: 42px;
    height: 126px;
    opacity: 0.9;

    .mapboxgl-ctrl-zoom-in {
      width: 100%;
      height: 42px;
    }
    .mapboxgl-ctrl-zoom-out {
      width: 100%;
      height: 42px;
    }
    .mapboxgl-ctrl-compass {
      width: 100%;
      height: 42px;
    }
  }
}

.mapboxgl-ctrl-logo {
  display: none !important;
}
</style>