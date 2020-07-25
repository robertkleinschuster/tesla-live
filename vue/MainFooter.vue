<template lang="html">
  <footer>
    <div class="row">
      <div id="last-refresh" class="column">
        Aktualisiert: {{ new Date(vehicleData.lastUpdate) | dateFormat('DD.MM.YYYY HH:mm:ss') }}
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import {mapGetters} from "vuex";

  export default {
    name: "MainFooter",
    computed: mapGetters(['vehicleData']),
  }
</script>

<style lang="scss" scoped>

  @media screen and (max-width: 900px) {
    footer {
      position: relative;
      height: 60px;
    }
  }

  footer {
    height: 60px;
  }

  #last-refresh {
    padding-left: 20px;
  }

</style>
