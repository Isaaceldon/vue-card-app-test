<template>
  <div class="container add-card-form">
    <div class="row">
      <div class="col-md-10" style="margin: 0px auto">
        <ErrorComponent :errors="errors"></ErrorComponent>

        <form class="new-form container card col-md-8 col-sm-11" @submit="addTransaction">
          <h3 class="new-form-h3">Creating of new Transaction</h3>
          <div class="row">
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="debit_card">Choose Card</label>
              <select
                class="form-select"
                name="debit_card_id"
                v-model="debit_card_id"
                id="debit_card"
                aria-label="Default select example"
              >
                <option v-for="card in allCards" :value="card.id" :key="card.id">{{card.type}}  {{card.number}}</option>
              </select>
            </div>
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="amount">Amount</label>
              <input
                class="form-control"
                type="number"
                name="amount"
                id="amount"
                placeholder=""
                min="0"
                v-model="amount"
              />
            </div>
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="debit_card">Choose Currency code</label>
              <select
                class="form-select"
                name="currency_code"
                v-model="currency_code"
                id="currency_code"
                aria-label="Default select example"
              >
                <option value="IDR">CURRENCY_IDR</option>
                <option value="SGD">CURRENCY_SGD</option>
                <option value="THB">CURRENCY_THB</option>
                <option value="VND">CURRENCY_VND</option>
                
              </select>
            </div>
          </div>

          <div class="d-flex my-3">
            <input
              class="form-control btn-primary btn"
              type="submit"
              value="Create transaction"
            />

            <input
              type="reset"
              class="form-control btn-danger btn"
              value="Cancel"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorComponent from "../views/Errors.vue";
import { getAPI } from "../axios-api";

export default {
  name: "AddTransactionComponent",
  components: {
    ErrorComponent,
  },

  data() {
    return {
      allCards: [],
      errors:[],
      debit_card_id:null,
      amount:null,
      currency_code:null,
      allcurrencies :[]
    };
  },

  methods:{
    addTransaction(e){
      this.errors = [];
      if (
        this.debit_card_id &&
        this.amount &&
        this.currency_code 
      ) {
        getAPI
            .post("/debit-card-transactions", {
              debit_card_id: this.debit_card_id,
              amount: this.amount,
              currency_code: this.currency_code,
            })
            .then((response) => {
             console.log(response);
              if (response.status == 201) {
                setInterval(() => {
                  document.location.href = "/listTransactionCard";
                  this.$swal(
                    "Creating",
                    "Debit card created with success!",
                    "success"
                  );
                }, 1000);
                
              } else {
                this.errors.push("Transaction failed!");
              }
            });
        }

      if (!this.amount) {
        this.errors.push("amount is required");
      }
    
      if (!this.currency_code) {
        this.errors.push("currency_code is required");
      }

      if (!this.debit_card_id) {
        this.errors.push("the debit card is required");
      }
      e.preventDefault();
    }
  },

  created() {
    this.allCards = [];
    getAPI.get("/debit-cards").then((response) => {
      // console.log(response)
      this.allCards = response.data;

    });
  },


};
</script>

<style scoped>
.add-card-form {
  top: 150px;
  position: relative;
}

.new-form {
  /* border: 1px solid blue; */
  margin: 0px auto;
}

input[type="reset"]:focus {
  background: red !important;
  color: white;
}
</style>
