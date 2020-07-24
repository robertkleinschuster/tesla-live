<template lang="html">
  <div id="content">
    <h1 v-if="vehicleData.displayName">{{ vehicleData.displayName}}</h1>
    <ErrorMessage v-if="vehicleData.error"></ErrorMessage>

    <div class="row">
      <div class="column" id="current-data">
        <div class="row">
          <div class="column hidden-small" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            Kilometerstand:
          </div>
          <div class="column" style="font-size: 25px; margin-top: auto; margin-bottom: auto; text-align: center;">
            <font-awesome-icon :icon="['fas', 'route']"></font-awesome-icon>
            {{ vehicleData.odometer | units('mi', 'km', false) | round(0) | numFormat }} km
          </div>
        </div>

        <div class="row">
          <div class="column hidden-small" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            Reichweite:
          </div>
          <div class="column">
            <Battery></Battery>
          </div>
        </div>

        <div class="row">
          <div class="column hidden-small" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            Geschwindigkeit:
          </div>
          <div class="column" style="font-size: 25px; margin-top: auto; margin-bottom: auto; text-align: center;">
            <font-awesome-icon :icon="['fas', 'tachometer-alt']"></font-awesome-icon>
            {{ vehicleData.speed | units('mi', 'km', false) | round(0) | numFormat }} km/h
          </div>
        </div>
        <div class="row">
          <div class="column hidden-small" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            Verbrauch:
          </div>
          <div class="column" style="font-size: 25px; margin-top: auto; margin-bottom: auto; text-align: center;">
            <font-awesome-icon :icon="['fas', 'bolt']"></font-awesome-icon>
            {{ vehicleData.power | round(0) }} kW
          </div>
        </div>
        <div class="row">
          <div class="column">
            <table>
              <tbody>
              <tr>
                <td>Status:</td>
                <td id="vehicle_state">{{ vehicleData.onlineState }}</td>
              </tr>
              <tr v-if="vehicleData.chargeState">
                <td>Ladestatus:</td>
                <td id="charging_state">{{ vehicleData.chargeState }}</td>
              </tr>
              <tr id="charge_rate" v-if="vehicleData.chargeRate">
                <td>Lädt:</td>
                <td>{{ vehicleData.chargeRate | units('mi', 'km', false) | round(0) | numFormat}} km/h</td>

              </tr>
              <tr v-if="vehicleData.chargePower">
                <td>Ladeleistung:</td>
                <td id="charger_power">{{ vehicleData.chargePower | round(0)}} kW</td>
              </tr>
              <tr v-if="vehicleData.outsideTemp">
                <td>Außentemperatur:</td>
                <td id="outside_temp">{{ vehicleData.outsideTemp }}</td>
              </tr>
              <tr v-if="vehicleData.insideTemp">
                <td>Innentemperatur:</td>
                <td id="inside_temp">{{ vehicleData.insideTemp }}</td>
              </tr>


              </tbody>
            </table>


          </div>


          <div class="column">
            <table>
              <tbody>
              <tr v-if="vehicleData.fastChargerPresent">
                <td>Fast Charger:</td>
                <td>{{ vehicleData.fastCharger}}</td>
              </tr>
              <tr v-if="vehicleData.fastChargerPresent">
                <td>Fast Charger Type:</td>
                <td>{{ vehicleData.fastChargerType }}</td>
              </tr>

              <tr id="time_to_full_charge" v-if="vehicleData.fullyChargedIn">
                <td>Voll geladen in:</td>
                <td>{{ vehicleData.fullyChargedIn }} min</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="row">
          <div class="column" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            <font-awesome-icon :icon="['fas', 'map-marked-alt']"></font-awesome-icon>

          </div>
          <div class="column" style="font-size: 25px; margin-top: auto; margin-bottom: auto">

          </div>
        </div>
        <div id="map"></div>
      </div>

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
    computed: mapGetters(['vehicleData']),
    created() {
      this.fetchVehicleData();
      setInterval(function () {
        this.fetchVehicleData();
      }.bind(this), 10000);
    }
  }
</script>

<style lang="scss" scoped>
  #content {
    margin: 20px 20px 0;
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

  .left {
    width: 25%;
  }

  .right {
    width: 75%;
  }

  @media screen and (max-width: 900px) {
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
</style>
