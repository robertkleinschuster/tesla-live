<template lang="html">
  <footer>
    <div class="row">
      <div id="last-refresh" class="column">
        {{ lastUpdateLabel }} {{ lastUpdate }}
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  export default {
    name: "MainFooter",
    data: function () {
      return {
        lastUpdateLabel: "Aktualisiert:",
        lastUpdate: "",
      }
    }
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
