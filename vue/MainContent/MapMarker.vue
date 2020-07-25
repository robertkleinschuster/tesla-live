<template lang="html">

</template>

<script lang="ts">

  export default {
        name: "MapMarker",
    props: {
      google: {
        type: Object,
        required: true
      },
      map: {
        type: Object,
        required: true
      },
      marker: {
        type: Object,
        required: true
      }
    },

    mounted() {
      new this.google.maps.Marker({
        position: this.marker.position,
        marker: this.marker,
        map: this.map,
        icon: {
          url: "img/car-icon.png", // url
          scaledSize: new this.google.maps.Size(55, 75), // scaled size
          origin: new this.google.maps.Point(0, 0), // origin
          anchor: new this.google.maps.Point(27.5, 75) // anchor
        }
      })
    }
    }
</script>

<style lang="scss" scoped>

</style>
