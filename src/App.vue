<template>
  <div>
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/shared/Header";
  import Footer from "@/components/shared/Footer";

  export default {
    components: {
      Header,
      Footer
    },
    created() {
      this.$store.dispatch("getTradeResult");
    }
  }
</script>

<style>
  body{
    background-color: #77889940 !important;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .2s ease-out;
  }
  .fade-leave-active{
    transition: opacity .2s ease-out;
    opacity: 0;
  }
</style>
