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
            <input type="text" class="form-control" placeholder="Enter the price of product" v-model="product.price">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea cols="30" rows="5" placeholder="Enter the description about product"
                      class="form-control" v-model="product.description"></textarea>
          </div>
          <hr>
          <button class="btn btn-primary" @click="saveProduct">Save</button>
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
  }
}
</script>

<style scoped>

</style>
