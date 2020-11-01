<template>
  <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>example.com</strong> | nejdetkadirr
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Total Purchase : </strong>
        <span class="badge badge-danger">{{ getTradeResult.totalPurchase | currency }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Total Sale : </strong>
        <span class="badge badge-success">{{ getTradeResult.totalSale | currency}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Balance : </strong>
        <span class="badge badge-primary">{{ getTradeResult.balance | currency }}</span>
    </span>
  </nav>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "Footer",
    computed: mapGetters(["getTradeResult"])
  }
</script>

<style scoped>

</style>
