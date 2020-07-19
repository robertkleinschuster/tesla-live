<template lang="html">
  <div>
    <MainHeader></MainHeader>
    <MainContent></MainContent>
    <MainFooter></MainFooter>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import MainHeader from "./vue/MainHeader.vue";
  import MainContent from "./vue/MainContent/MainContent.vue";
  import MainFooter from "./vue/MainFooter.vue";

  export default Vue.extend({
    components: {MainHeader, MainContent, MainFooter},
    data() {
      return {};
    }
  });
</script>

<style lang="scss" scoped>

</style>
