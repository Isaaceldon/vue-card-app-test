<template>
  <div class="info-card container">
    <h2 class="bg-info p-2 fs-3 my-3">Informations about the card</h2>
    <ul>
      <li>
        Number:
        <span class="mx-3 current-card-info">{{ currentCard.number }}</span>
      </li>
      <li>
        Type:<span class="mx-3 current-card-info">{{ currentCard.type }}</span>
      </li>
      <li>
        Date of expiration:<span class="mx-3 current-card-info">{{
          currentCard.expiration_date
        }}</span>
      </li>
    </ul>

    <div v-show="allTransactions">
      <h2 class="bg-info p-2 fs-3 my-3">All transaction with the debit card</h2>
      <table class="table container mt-5">
        <thead class="table-success">
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">Card Type</th>
            <th scope="col">Card Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Currency Code</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!-- <td>{{ index + 1 }}</td> -->
            <td>{{ currentCard.type }}</td>
            <td>{{ currentCard.number }}</td>
            <td>{{ allTransactions.amount }}</td>
            <td>{{ allTransactions.currency_code }}</td>
            <td>
              <b-button
                v-b-modal="'modal-1' + allTransactions.id"
                class="btn mx-1 btn-info"
                >View</b-button
              >
              <b-modal
                hide-footer
                :id="'modal-1' + allTransactions.id"
                title="Informations about the card"
              >
                <ViewTransaction :card="currentCard" :transaction="allTransactions" />
              </b-modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getAPI } from "../axios-api";
import ViewTransaction from "./ViewTransaction.vue";

export default {
  name: "AllCardView",
  data() {
    return {
      allTransactions:null,
      currentCard: null,
    };
  },
  components: { ViewTransaction },
  methods: {},
  created() {

    getAPI.get(`/debit-cards/${this.$route.params.cardId}`).then((response) => {
      if (response.status === 200) {
        // console.log(response);
        this.currentCard = response.data;
      }
    });

    getAPI
      .get(`/debit-card-transactions/${this.$route.params.cardId}`)
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        this.allTransactions = response.data;
        // console.log(this.allTransactions);
      });
  },
};
</script>

<style scoped>
.info-card {
  top: 150px;
  text-align: center;
  position: relative;
}

.info-card ul {
  text-align: left;
}
.current-card-info {
  font-size: 16px;
}
</style>
