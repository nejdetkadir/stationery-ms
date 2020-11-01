<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product operations</h3>
          <hr>
          <div class="form-group">
            <label>Product name</label>
            <input type="text" class="form-control" placeholder="Enter the name of product" v-model="product.name">
          </div>
          <div class="form-group">
            <label>Piece</label>
            <input type="number" class="form-control" placeholder="enter the piece of product" v-model="product.piece">
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" placeholder="Enter the price of product" v-model="product.price">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea cols="30" rows="5" placeholder="Enter the description about product"
                      class="form-control" v-model="product.description"></textarea>
          </div>
          <hr>
          <button class="btn btn-primary" :disabled="saveEnable" @click="saveProduct">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPurchase",
  data() {
    return{
      product: {
        name: '',
        piece: null,
        price: null,
        description: ''
      }
    }
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("saveProduct", this.product)
    }
  },
  computed: {
    saveEnable() {
      if (this.product.name.length > 0 && this.product.piece > 0 && this.product.price > 0 && this.product.description.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.product.name.length > 0 || this.product.piece > 0 || this.product.price > 0 || this.product.description.length > 0) {
      if (confirm("There are unsaved information, Are you sure want to go other page?")) {
        next();
      } else {
        next(false)
      }
    } else {
      next();
    }
  }
}
</script>

<style scoped>

</style>
