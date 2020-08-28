<template>
  <div class="battery">
    <div :style="{ width: vehicleData.batteryPercent * 1.5 + 'px' }" class="battery-level">
      <div class="battery-label">{{ vehicleData.batteryRange | units('mi', 'km', false) | round(0) | numFormat}} km</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Battery",
    computed: mapGetters(['vehicleData']),

  }
</script>

<style scoped>
  .battery {
    background-color: #bbb;
    border: 2px solid #555;
    height: 84px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 304px;
    border-radius: 6px;
  }

  .battery:after {
    background-color: #bbb;
    border-right: 2px solid #555;
    border-top: 2px solid #555;
    border-bottom: 2px solid #555;
    content: "";
    display: block;
    height: 42px;
    position: absolute;
    right: -18px;
    top: 16px;
    width: 14px;

  }

  .battery .battery-level {
    background-color: #028f0c;
    margin-top: 1px;
    margin-left: 1px;
    margin-right: 1px;
    border-radius: 3px;
    height: 82px;

  }

  .battery-label {
    height: 100%;
    font-size: 50px;
    color: #bbb;
    text-shadow: 2px 2px 4px black;
    padding-top: 7px;
    overflow: visible;
    white-space: nowrap;
  }

  .battery .battery-level.high {
    background-color: #66CD00;
  }

  .battery .battery-level.medium {
    background-color: #FCD116;
  }

  .battery .battery-level.low {
    background-color: #FF3333;
  }

</style>
