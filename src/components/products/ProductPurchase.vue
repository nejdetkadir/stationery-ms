<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Product operations</h3>
          <hr>
          <div class="form-group">
            <label>Product name</label>
            <input type="text" class="form-control" placeholder="Enter the name of product">
          </div>
          <div class="form-group">
            <label>Piece</label>
            <input type="text" class="form-control" placeholder="enter the piece of product">
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="text" class="form-control" placeholder="Enter the price of product">
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea cols="30" rows="5" placeholder="Enter the description about product"
                      class="form-control"></textarea>
          </div>
          <hr>
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPurchase"
}
</script>

<style scoped>

</style>
