<template></template>

<script>
import DataBar from "components/common/DataBar_R.vue";
import Legend from "components/common/Legend.vue";
import { init_map } from "utils/initMap.js";
import { add_tms, addgeojson_S, addgeojson_L } from "utils/loadLayer.js";
import { removeLayers, removeLayers2 } from "utils/removeLayers.js";
let hoveredStateId = null;
let popup;
export default {
  mounted() {
    init_map(window.MAP, [113.35, 23.2], 8.5);
    this.initLayers();
    popup = new window.mapbox.Popup({
      closeButton: false,
      closeOnClick: false,
    });
    this.hoverLayer();
  },
  methods: {
    initLayers() {
      var paint1 = {
        "fill-outline-color": "#df2040",
        "fill-color": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          "#627BC1",
          "#fff",
        ],
        "fill-opacity": [
          "case",
          ["boolean", ["feature-state", "hover"], false],
          1,
          0.1,
        ],
      };
      add_tms(window.MAP, "industry", "fill", paint1);
      var paint2 = {
        "line-color": "#df2040",
        "line-width": 1.1,
      };
      add_tms(window.MAP, "industry_line", "line", paint2);
    },
     hoverLayer() {
      let _this = this;
      window.MAP.on("mousemove", "industry",_this.onmousemove);
      window.MAP.on("mouseleave", "industry", _this.onmouseleave);
      window.MAP.on("click",_this.onclick);
    },
    onmousemove(e) {
      window.MAP.getCanvas().style.cursor = "pointer";
      var coordinates = e.features[0].geometry.coordinates[0][0];
      if (coordinates.length != 2) {
        coordinates = coordinates[0];
      }
      var name = e.features[0].properties.QKMC;
      var type = e.features[0].properties.YDGN;
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(name).addTo(window.MAP);
      if (e.features.length > 0) {
        if (hoveredStateId !== null) {
          window.MAP.setFeatureState(
            {
              source: "industry",
              sourceLayer: "industry",
              id: hoveredStateId,
            },
            { hover: false }
          );
        }
        hoveredStateId = e.features[0].id;
        window.MAP.setFeatureState(
          {
            source: "industry",
            sourceLayer: "industry",
            id: hoveredStateId,
          },
          { hover: true }
        );
      }
    },
    onmouseleave() {
      if (hoveredStateId !== null) {
        window.MAP.setFeatureState(
          {
            source: "industry",
            sourceLayer: "industry",
            id: hoveredStateId,
          },
          { hover: false }
        );
      }
      hoveredStateId = null;
      window.MAP.getCanvas().style.cursor = "";
      popup.remove();
    },
  },
   destroyed() {
    removeLayers(window.MAP, [
      'industry',
      "industry_line",
    ]);
  },
};
</script>

<style>
</style>