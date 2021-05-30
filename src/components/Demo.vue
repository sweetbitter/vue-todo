<template>
  <div id="root">
    <p>{{originPrice}}</p>
    <p>{{doublePrice}}</p>
    <p>{{triplePrice}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["originPrice", "doublePrice", "triplePrice"])
    // originPrice() {
    //   return this.$store.getters.originPrice;
    // },
    // doublePrice() {
    //   return this.$store.getters.originPrice;
    // },
    // triplePrice() {
    //   return this.$store.getters.originPrice;
    // }
  }
};
</script>

<style>
</style>