<template>
  <div class="container">
    <div class="loading" v-if="saveClicked">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product sale</h3>
          <hr>
          <div class="form-group">
            <label>Product name</label>
            <select class="form-control" v-model="selectedProduct" @change="productSelected">
              <option selected disabled>Please select a product</option>
              <option
                  :disabled="product.piece == 0"
                  :value="product.id"
                  v-for="product in getProducts"
                  :key="product.id">{{ product.name }}</option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="selectedProduct">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info">In stock : {{product.piece}}</span>
                      <span class="badge badge-primary">Price : {{product.price | currency}}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">{{product.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Piece</label>
            <input type="number" v-model="productPiece" class="form-control" placeholder="Please enter piece of product..">
          </div>
          <hr>
          <button @click="sellProduct" :disabled="saveEnable" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ProductSell",
  data() {
    return{
      selectedProduct: null,
      product: null,
      productPiece: null,
      saveClicked: false
    }
  },
  computed: {
    ...mapGetters(["getProducts"]),
    saveEnable() {
      if (this.selectedProduct != null && this.product != null && this.productPiece != null) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    sellProduct() {
      this.saveClicked = true;
      this.$store.dispatch("sellProduct", {
        id: this.selectedProduct,
        piece: this.productPiece
      });
    }
  },
  beforeRouteLeave(to, from, next) {
    if ((this.selectedProduct != null || this.product != null || this.productPiece != null) && !this.saveClicked) {
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
  .border-danger {
    border-style: dashed !important;
  }
</style>
