<template lang="html">
  <header>
    <div id="top-nav"><a :href="backLink">
      <font-awesome-icon :icon="['fas', 'arrow-circle-left']"></font-awesome-icon>
      {{ backLinkLabel }}</a>
      <div class="fb-share-button" style="width: 70px; float: right;" data-href="https://live.sonice.at"
           data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" :href="shareLink"
                                                                                     class="fb-xfbml-parse-ignore">{{
        shareButtonLabel }}</a></div>
    </div>
  </header>
</template>

<script lang="ts">
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";

  library.add(faArrowCircleLeft)

  export default {
    name: "MainHeader",
    data: function () {
      return {
        backLink: process.env.BACK_LINK,
        backLinkLabel: "Zurück",
        shareLink: process.env.SHARE_LINK,
        shareButtonLabel: "Teilen",
      }
    }
  }
</script>

<style lang="scss" scoped>

  #top-nav {
    padding: 20px;
    border-bottom: #565656 solid 1px;
    font-weight: 400;
  }

  .fb-share-button {
    margin-left: 20px;
  }

</style>
