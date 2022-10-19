<template>
  <div class="debit-card">
    <div class="container card-table">
      <div class="row my-5">
        <div class="col-md-6">
          <h3>List of transactions</h3>
        </div>
      </div>
      <table class="table container mt-5">
        <thead class="table-success">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Card Type</th>
            <th scope="col">Card Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Currency Code</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in allTransactions" :key="item.id">
            <th scope="row">1</th>

            <td>{{ index + 1 }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.currency_code }}</td>
            <td>
              <button class="btn mx-1 btn-info">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCardTransaction",
  props:["allTransactions","allCard"],
 
}

</script>

<style scoped>
.card-table {
  bottom:250px !important;
  position: relative;
}

.debit-card {
  top: 100px;
  position: relative;
}
</style>
