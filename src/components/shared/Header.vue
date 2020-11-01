<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link class="navbar-brand" to="/" tag="a">Product List</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/product-operations" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">Product Operations</a>
        </router-link>
        <router-link to="/product-sale" tag="li" class="nav-item" active-class="active">
          <a class="nav-link">Product Sale</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>

</style>
