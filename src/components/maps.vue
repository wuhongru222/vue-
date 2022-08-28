<template>
  <!-- <baidu-map class="map" center="北京" :scroll-wheel-zoom="true" ></baidu-map> -->
<div>
  <input  v-model="center" placeholder="请输入查询地址">
      <input v-model.number="center.lng" placeholder="清输入经度">
    <input v-model.number="center.lat" placeholder="纬度">
    <input v-model.number="zoom" placeholder="请输入缩放等级">
    <baidu-map 
        class="map"
        :scroll-wheel-zoom="true"
        :center="center"
        :zoom="zoom"
        @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom">
            <p style="padding: 0 10px;">以下是使用 `bm-view` 组件渲染的百度地图实例</p>
    <bm-view style="width: 100%; height:100vh; flex: 1"></bm-view>
    </baidu-map>

   

</div>
</template>

<script>
export default {
  name:'Maps',
  data () {
    return {
      center: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 15
    }
  },
  methods: {
     syncCenterAndZoom (e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    }
  }
}
</script>
