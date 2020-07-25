<template lang="html">
  <div>
    <div id="map" class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script lang="js">
  import GoogleMapsApiLoader from 'google-maps-api-loader'

  export default {
    name: "Map",
    props: {
      mapConfig: Object,
      apiKey: String,
    },

    data() {
      return {
        google: null,
        map: null
      }
    },

    async mounted() {
      const googleMapApi = await GoogleMapsApiLoader({
        apiKey: this.apiKey
      })
      this.google = googleMapApi
      this.initializeMap()
    },

    methods: {
      initializeMap() {
        const mapContainer = this.$refs.googleMap
        this.map = new this.google.maps.Map(
          mapContainer, this.mapConfig
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  #map {
    height: 60vh;
    margin-top: 20px;
  }
</style>
