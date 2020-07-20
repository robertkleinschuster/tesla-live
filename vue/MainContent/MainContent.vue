<template lang="html">
  <div id="content">
    <div class="row">
      <div class="column" id="current-data">
        <div class="row">
          <div class="column hidden-small" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            Kilometerstand:
          </div>
          <div class="column" style="font-size: 25px; margin-top: auto; margin-bottom: auto; text-align: center;">
            <font-awesome-icon :icon="['fas', 'route']"></font-awesome-icon>
            {{ odometer }}
          </div>
        </div>

        <div class="row">
          <div class="column hidden-small" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            Reichweite:
          </div>
          <div class="column">
            <div class="battery">
              <div :style="'width: ' + batteryPercent*1.5" class="battery-level">
                <div class="battery-label">{{ availableRange }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="column hidden-small" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            Geschwindigkeit:
          </div>
          <div class="column" style="font-size: 25px; margin-top: auto; margin-bottom: auto; text-align: center;">
            <font-awesome-icon :icon="['fas', 'tachometer-alt']"></font-awesome-icon>
            {{ currentSpeed }}
          </div>
        </div>
        <div class="row">
          <div class="column hidden-small" style="font-size: 25px; margin-top: auto; margin-bottom: auto">
            Verbrauch:
          </div>
          <div class="column" style="font-size: 25px; margin-top: auto; margin-bottom: auto; text-align: center;">
            <font-awesome-icon :icon="['fas', 'bolt']"></font-awesome-icon>
            {{ currentWattage }}
          </div>
        </div>
        <div class="row">
          <div class="column">
            <table>
              <tbody>
              <tr>
                <td>Status:</td>
                <td id="vehicle_state"></td>
              </tr>
              <tr>
                <td>Ladung:</td>
                <td id="battery_level"></td>
              </tr>
              <tr>
                <td>Reichweite:</td>
                <td id="ideal_battery_range"></td>
              </tr>
              <tr>
                <td>Ladestatus:</td>
                <td id="charging_state"></td>
              </tr>
              <tr id="charge_rate">
                <td>Lädt:</td>
                <td></td>

              </tr>
              <tr>
                <td>Ladeleistung:</td>
                <td id="charger_power"></td>
              </tr>
              <tr>
                <td>Außentemperatur:</td>
                <td id="outside_temp"></td>
              </tr>
              <tr>
                <td>Innentemperatur:</td>
                <td id="inside_temp"></td>
              </tr>


              </tbody>
            </table>


          </div>


          <div class="column">
            <table>
              <tbody>
              <tr>
                <td>Fast Charger:</td>
                <td></td>
              </tr>
              <tr>
                <td>Fast Charger Type:</td>
                <td></td>
              </tr>

              <tr id="time_to_full_charge">
                <td>Voll geladen in:</td>
                <td></td>
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

  library.add(faBolt)
  library.add(faTachometerAlt)
  library.add(faRoute)
  library.add(faMapMarkedAlt)

  export default {
    name: "MainContent",
    methods: {
      ...mapActions(["fetchVehicleData"]),
    },
    computed: mapGetters(['vehicleData']),
    created() {
      this.fetchVehicleData();
    },
    data: function () {
      return {
        batteryPercent: 30,
        odometer: "",
        availableRange: "",
        currentSpeed: "",
        currentWattage: "",

      }
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
