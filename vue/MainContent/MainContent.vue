<template lang="html">
  <div id="content">
    <div class="headline"><h1 v-if="vehicleData.displayName">{{ vehicleData.displayName}}</h1></div>
    <vue-headful :title="vehicleData.displayName"></vue-headful>
    <ErrorMessage v-if="vehicleData.error"></ErrorMessage>

    <div class="row">
      <div class="column">


        <div class="icon-group-list">
          <div class="icon-group">
            <font-awesome-icon class="icon" :icon="['fas', 'route']"></font-awesome-icon>
            <p>{{ vehicleData.odometer | units('mi', 'km', false) | round(0) | numFormat }} km</p>
          </div>
          <div class="icon-group">
            <font-awesome-icon class="icon" :icon="['fas', 'tachometer-alt']"></font-awesome-icon>
            <p>{{ vehicleData.speed | units('mi', 'km', false) | round(0) | numFormat }} km/h</p>
          </div>
          <div class="icon-group">
            <font-awesome-icon class="icon" :icon="['fa', 'bolt']"></font-awesome-icon>
            <p>{{ vehicleData.power | round(0) }} kW</p>
          </div>
        </div>
        <Battery class="battery"></Battery>

     <!--   <button class="show-more" v-on="">+</button> -->

        <table class="detail-table ">
          <tbody>
          <tr>
            <td>Status:</td>
            <td>{{ vehicleData.onlineState }}</td>
          </tr>
          <tr v-if="vehicleData.chargeState">
            <td>Ladestatus:</td>
            <td>{{ vehicleData.chargeState }}</td>
          </tr>
          <tr v-if="vehicleData.chargeRate">
            <td>Lädt:</td>
            <td>{{ vehicleData.chargeRate | units('mi', 'km', false) | round(0) | numFormat}} km/h</td>
          </tr>
          <tr v-if="vehicleData.fastChargerPresent">
            <td>Fast Charger:</td>
            <td>{{ vehicleData.fastCharger}}</td>
          </tr>
          <tr v-if="vehicleData.fastChargerPresent">
            <td>Fast Charger Type:</td>
            <td>{{ vehicleData.fastChargerType }}</td>
          </tr>
          <tr v-if="vehicleData.fullyChargedIn">
            <td>Voll geladen in:</td>
            <td>{{ vehicleData.fullyChargedIn }} min</td>
          </tr>

          <tr v-if="vehicleData.chargePower">
            <td>Ladeleistung:</td>
            <td>{{ vehicleData.chargePower | round(0)}} kW</td>
          </tr>
          <tr v-if="vehicleData.outsideTemp">
            <td>Außentemperatur:</td>
            <td>{{ vehicleData.outsideTemp }} °C</td>
          </tr>
          <tr v-if="vehicleData.insideTemp">
            <td>Innentemperatur:</td>
            <td>{{ vehicleData.insideTemp }} °C</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="column">
        <gmap-map :center="{lat: vehicleData.locationLatitude, lng: vehicleData.locationLongitute}" :zoom="13" class="map">
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
</template>

<script lang="ts">
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {faBolt} from "@fortawesome/free-solid-svg-icons";
  import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons";
  import {faRoute} from "@fortawesome/free-solid-svg-icons";
  import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
  import {mapActions, mapGetters} from "vuex";
  import ErrorMessage from "./ErrorMessage.vue";
  import Battery from "./Battery.vue";

  library.add(faBolt)
  library.add(faTachometerAlt)
  library.add(faRoute)
  library.add(faMapMarkedAlt)



  export default {
    name: "MainContent",
    components: {Battery, ErrorMessage},
    methods: {
      ...mapActions(["fetchVehicleData"]),
    },
    computed: {
      ...mapGetters(['vehicleData', 'mapConfig', 'markers']),
    },
    created() {
      this.fetchVehicleData();
      setInterval(function () {
        this.fetchVehicleData();
      }.bind(this), 10000);
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 40px;
  }

  #content {
    margin: 20px 20px 0;
    font-size: 25px;
  }

  .icon-group-list {
    display: flex;
    margin-bottom: 50px;
  }

  .icon-group {
    flex: 33%;
    text-align: center;
    #border: #565656 solid 1px;
    border-radius: 50px;
    margin: 10px;
    padding: 20px;
  }

  .icon-group > p {
    margin: 0;
  }

  .map-icon {
    font-size: 50px;
  }

  .icon {
    font-size: 50px;
    margin-bottom: 10px;
  }

  .headline {
    text-align: center;
  }

  .row {
    display: flex;
  }

  .column .row {
    margin-top: 20px;
  }

  .column {
    flex: 50%;
  }

  .detail-table {
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
    text-align: right;
  }

  .battery {
    margin-bottom: 50px;
  }

  .show-more {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .icon-group-list {
      display: inline;
    }
  }

  @media screen and (max-width: 1366px) {

    h1 {
      margin-bottom: 20px;
    }

    .battery {
      margin-bottom: 25px;
    }


    .icon-group {
      border: 0;
    }

    .show-more {
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50px;
      border: 0;
      font-size: 40px;
      padding: 5px 15px 10px 15px;
      background: #bbbbbb;
    }

    .show-more:active {
      background-color: #5c5c5c;
      color: black;
    }

    .detail-table {
      margin-bottom: 0px;
    }

    .row {
      display: inline;
    }

    .column {
      padding-bottom: 20px;
    }

    .hidden-small {
      display: none;

    }

    .show-small {
      display: inherit;
    }
  }

  .show-small {
    display: none;
  }

  .map {
    height: 70vh;
    margin-top: 20px;
  }
</style>
