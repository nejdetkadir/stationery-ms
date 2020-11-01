<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr>
          <table class="table table-hover table-striped table-bordered" v-if="getProducts.length > 0">
            <thead>
            <th>ID</th>
            <th>Product name</th>
            <th>Piece</th>
            <th>Price</th>
            <th>Description</th>
            </thead>
            <tbody>
            <tr v-for="product in getProducts" :key="product.id">
              <td class="align-middle text-center"><span class="badge badge-info"> {{ product.id }} </span></td>
              <td class="align-middle text-center">{{ product.name }}</td>
              <td class="align-middle text-center text-white" :class="setPieceClasses(product.piece)">{{ product.piece }}</td>
              <td style="width: 120px;">{{ product.price | currency }}</td>
              <td class="align-middle">{{ product.description}}</td>
            </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>We could not find any record here yet</strong>
            <br>
            <small>You can use menu of product operations for adding new record</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "ProductList",
    computed: {
      ...mapGetters(["getProducts"]),
    },
    methods: {
      setPieceClasses(piece) {
        return{
          'btn-danger': piece === 0 || piece == null,
          'btn-success': piece > 0,
        }
      }
    }
  }
</script>

<style scoped>

</style>
