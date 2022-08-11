<template>
  <div id="map"></div>
</template>

<script>
import {
  Viewer,
  Cartesian3
} from "cesium";

export default {
  name: 'App',
  mounted() {
    let viewer = new Viewer("map", {
      imageryProvider: undefined,
      terrainProvider: undefined,

      // 隐藏小部件
      animation: true,
      timeline: true,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      navigationHelpButton: false,
    });

    viewer.camera.flyTo({
      destination : Cartesian3.fromDegrees(64.3474, 45.85465, 4500000.0),
      duration: 1,
    });
  }
}
</script>

<style>
</style>
