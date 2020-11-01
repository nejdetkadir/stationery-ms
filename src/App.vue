<template>
  <div>
    <Header></Header>
    <router-view/>
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
    }
  }
</script>

<style>
</style>
