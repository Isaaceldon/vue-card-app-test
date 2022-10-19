<template>
  <div class="debit-card">
    <div class="container card-table">
      <div class="row my-5">
        <div class="col-md-4">
          <h3>List of debit card</h3>
        </div>
        <div class="col-md-4">
          <router-link to="/newCard" class="btn btn-success"
            >Add new card</router-link
          >
        </div>

        <div class="col-md-4">
          <router-link to="/newTransaction" class="btn btn-success"
            >New Transaction</router-link
          >
        </div>
      </div>

      <table class="table container mt-5">
        <thead class="table-success">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Card Type</th>
            <th scope="col">Card number</th>
            <th scope="col">Expiration Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(card, index) in allCards" :key="card.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ card.type }}</td>
            <td>{{ card.number }}</td>
            <td>{{ card.expiration_date }}</td>
            <td>
              <router-link
                :to="{
                  name: 'infoCard',
                  params: { cardId: card.id },
                }"
                class="btn mx-1 btn-primary"
                >View
              </router-link>
              <router-link
                :to="{
                  name: 'editCard',
                  params: { cardId: card.id },
                }"
                class="btn mx-1 btn-primary"
                >Edit</router-link
              >

              <b-button
                v-b-modal="'modal-1' + card.id"
                class="btn mx-1 btn-danger"
                >View</b-button
              >
              <b-modal
                hide-footer
                :id="'modal-1' + card.id"
                title="Do you really want to delete ?"
              >
                <div class="text-center m-auto">
                  <div class="mb-3 text-center" style="font-size:50px">
                    <i class="fas fa-exclamation-triangle"></i>
                  </div>
                  <button class="btn btn-danger col-md-3" @click="deleteCard(card.id)">
                    Delete
                  </button>
                </div>
              </b-modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <!-- <ListCardTransaction :allCard="allCards" :allTransactions="allTransactions"/> -->
    </div>
  </div>
</template>

<script>
import { getAPI } from "../axios-api.js";
// import ListCardTransaction from "../views/ListCardTransaction.vue"
export default {
  name: "ListDebitCardComponent",
  // components:{ListCardTransaction},
  data() {
    return {
      Errors: [],
      allCards: [],
      allTransactions : [],
    };
  },
  methods: {
    deleteCard(card_id) {
      getAPI.delete(`/debit-cards/${card_id}`).then((response) => {
         console.log(response);
        this.$router.go(0);
      });
    },
  },


  created() {

    this.allCards = [];
    getAPI.get("/debit-cards").then((response) => {
      this.allCards = response.data;
    });


  // this.allTransactions = [];
  //     getAPI
  //     .get(`/debit-card-transactions`)
  //     .then((response) => {
  //       // console.log(response)
  //       this.allTransactions = response.data;
  //     });
  },
};
</script>

<style scoped>
.card-table {
  position: relative;
  margin-top: 250px;
  bottom: 200px;
}

.debit-card {
  top: 100px;
  position: relative;
}
</style>
