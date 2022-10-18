<template>
  <div class="debit-card">
    <div class="container">
      <div class="row my-5">
        <div class="col-md-6">
          <h3>List of debit card</h3>
        </div>
        <div class="col-md-6">
          <router-link to="/newTransaction" class="btn btn-success"
            >New Transaction</router-link
          >
        </div>
      </div>

      <form
        class="new-form container card  col-sm-12"
        @submit="viewTransaction"
      >
        <h3 class="new-form-h3">Transactions of debit card</h3>
        <div class="row justify-content-center align-items-center">
          <div class="form-group col-md-6 col-sm-12">
            <label class="control-label" for="debit_card">Choose Card</label>
            <select
              class="form-select"
              name="debit_card_id"
              v-model="debit_card_id"
              id="debit_card"
              aria-label="Default select example"
            >
              <option v-for="card in allCards" :value="card.id" :key="card.id">
                {{ card.type }} {{ card.number }}
              </option>
            </select>
          </div>
          <div class="form-group col-md-6 col-sm-12 p-0">
            <input
              class="form-control btn-primary btn "
              type="submit"
              value="View transactions"
            />
          </div>
        </div>
      </form>

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
              
              <button class="btn mx-1 btn-danger" @click="showAlert(item.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getAPI } from "../axios-api.js";
export default {
  name: "ListTransactionComponent",
  data() {
    return {
      Errors: [],
      allTransactions:[],
      debit_card_id:null,
      allCards:[]

    };
  },
  methods: {


    viewTransaction(){
      this.allTransactions = [];
      getAPI
      .get(`/debit-card-transactions/${this.debit_card_id}`)
      .then((response) => {
        this.allTransactions = response.data;
      });
      this.$router.go(0)
    },

    showAlert(id) {
      this.$swal({
        title: "Are you sure to delete this Transaction ?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        console.log(id);
        if (result.value) {
          this.$swal(
            "Deleted",
            " You successfully deleted this file ",
            "success"
          );
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },
  },

  created() {
      this.allCards = [];
      getAPI.get("/debit-cards").then((response) => {
      // console.log(response)
      this.allCards = response.data;
  });


}
}
</script>

<style scoped>
.card-table {
  width: 80%;
  position: relative;
  margin: 0px auto;
}

.debit-card {
  top: 100px;
  position: relative;
}
</style>
