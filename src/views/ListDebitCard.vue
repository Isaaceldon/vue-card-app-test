<template>
  <div class="debit-card">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>List of debit card</h3>
        </div>
        <div class="col-md-6">
          <router-link to="/newCard" class="btn btn-success">Add new card</router-link>
        </div>
      </div>

      <table class="table container mt-5">
        <thead class="table-success">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Card Type</th>
            <th scope="col">Card number</th>
            <th scope="col">EXpiration Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="card in allCards" :key="card.id">
            <th scope="row">1</th>
            <td>{{card.type}}</td>
            <td>{{card.number}}</td>
            <td>{{card.expiration_date}}</td>
            <td>
              <router-link 
              :to="{
                name: 'infoCard',
                params:{cardId:card.id},
              }"
              
               class="btn mx-1 btn-info"
                >
                View</router-link
              >
              <router-link   :to="{
                name: 'editCard',
                params:{cardId:card.id},
              }" class="btn mx-1 btn-primary"
                >Edit</router-link
              >
              <button
                class="btn mx-1 btn-danger"
                @click="showAlert(card.id)"
              >
                Delete</button>
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
  name: "ListDebitCardComponent",
  data() {
    return {
     Errors:[],
     allCards:[],
    };
  },

  methods: {
    showAlert(id) {
      this.$swal({
        title: "Are you sure to delete this debit card ?",
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
    getAPI
      .get("/debit-cards")
      .then((response) => {
        this.allCards = response.data.data;
        // console.log(this.allCards);
      });
  },
};
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
