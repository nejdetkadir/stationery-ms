<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr>
          <table class="table table-hover table-striped table-bordered">
            <thead>
            <th>ID</th>
            <th>Product name</th>
            <th>Piece</th>
            <th>Price</th>
            <th>Description</th>
            </thead>
            <tbody>
            <tr>
              <td class="align-middle text-center"><span class="badge badge-info"> E564fghdE563df </span></td>
              <td class="align-middle text-center"> lorem </td>
              <td class="align-middle text-center"> 1 </td>
              <td style="width: 120px;"> 10,000</td>
              <td class="align-middle"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aspernatur ducimus impedit quaerat! Alias esse, eum ex fugit praesentium quis unde veniam. Consequatur ea nesciunt reprehenderit sunt veniam veritatis.</td>
            </tr>
            </tbody>
          </table>
          <div class="alert alert-warning">
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
export default {
  name: "ProductList"
}
</script>

<style scoped>

</style>
