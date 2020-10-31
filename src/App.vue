<template>
  <div>
    <Header></Header>
    <ProductList></ProductList>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/shared/Header";
  import Footer from "@/components/shared/Footer";
  //import ProductPurchase from "@/components/products/ProductPurchase";
  //import ProductSell from "@/components/products/ProductSell";
  import ProductList from "@/components/products/ProductList";

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      ProductList,
    }
  }
</script>

<style>
</style>
