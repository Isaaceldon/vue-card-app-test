<template>
    <div class="container add-card-form">
        <div class="row">
        <div class="col-md-10" style="margin: 0px auto">
          <ErrorComponent :errors="errors"></ErrorComponent>

          <form class="new-form container card col-md-8 col-sm-11">
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
                <option value="DIRECT ELIMINATION">DIRECT ELIMINATION</option>
                <option value="GROUP">GROUP</option>
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
              <label class="control-label" for="currency_code"
                >Currency Code</label
              >
              <input
                class="form-control"
                type="text"
                name="currency_code"
                id="currency_code"
                min="0"
                v-model="currency_code"
              />
            </div>
          </div>

          <div class="d-flex my-3">
            <input
              class="form-control btn-primary btn  "
              type="submit"
              value="Create transaction"
            />

            <input
              type="reset"
              class="form-control btn-danger btn  "
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
export default {
    name: 'AddTransactionComponent',
    components:{
        ErrorComponent
    },

    
}
</script>

<style scoped>
.add-card-form{
    top: 150px;
    position: relative;
}

.new-form{
/* border: 1px solid blue; */
margin: 0px auto;
}


input[type="reset"]:focus{
    background: red !important;
    color:white;
}
</style>