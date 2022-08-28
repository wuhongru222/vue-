<template>

  <baidu-map :center="center" :zoom="zoom" @ready="handler">


  </baidu-map>
  
</template>
<script>
export default {
  name:'Map',
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
     
 
    }
  }
}
</script>
<style>
.map {
  width: 100vw;
  height:100vw;
  overflow: hidden;
}
.BMap_cpyCtrl {
    display: none;
}
.anchorBL {
    display: none;
}

</style>