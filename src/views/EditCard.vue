<template>
  <div class="container add-card-form">
    <div class="row">
      <div class="col-md-10" style="margin: 0px auto">
        <ErrorComponent :errors="errors"></ErrorComponent>

        <form
        method="POST"
          class="new-form container card col-md-8 col-sm-11"
          @submit="updateCard"
        >
          <h3 class="new-form-h3">Editing of the card</h3>
          <div class="row">
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="type">Type Card</label>
              <input
              disabled
                class="form-control"
                type="text"
                name="type"
                id="type"
              />
            </div>
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="number">Card number</label>
              <input
              disabled
                class="form-control"
                type="number"
                name="number"
                id="number"
                placeholder="Ex:1000 0000 0000 0000"
              />
            </div>
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="expiration_date"
                >Expiration Date</label
              >
              <input
              disabled
                class="form-control"
                type="text"
                name="expiration_date"
                id="expiration_date"
              />
            </div>
            <!-- <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="expiration_date"
                >Disable Date</label
              >
              <input
                class="form-control"
                type="date"
                name="is_active"
                id="is_active"
                v-model="is_active"
              />
            </div> -->
          </div>

          <div class="d-flex my-3">
            <input
              class="form-control btn-primary btn"
              type="submit"
              value="Disable"
            />

            <button
              class="form-control btn-danger btn"
             @click="goBack"
            >Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorComponent from "../views/Errors.vue";
import { getAPI } from "../axios-api.js";
import $ from "jquery";
export default {
  name: "EditCardComponent",
  components: {
    ErrorComponent,
  },

  data() {
    return {
      errors: [],
      currentCard: null,
    };
  },

  methods: {
    updateCard(e) {
      e.preventDefault();
      this.errors = [];
        getAPI
          .put(`/debit-cards/${this.$route.params.cardId}`, {
            is_active : true 
          })
          .then((response) => {
            if (response.status === 200) {
              setInterval(() => {
                document.location.href = "/listCard";
                this.$swal(
                  "Editing",
                  "Debit card disabled with success!",
                  "success"
                );
              }, 1000);
             
              // this.$router.push("/listCard")
            } else {
              this.errors.push("Editing failed!");
            }
          });
    
      
    },

    goBack(){
      this.$router.go(-1)
       }
  },

  created() {
    getAPI.get(`/debit-cards/${this.$route.params.cardId}`).then((response) => {
      if (response.status === 200) {
        this.currentCard = response.data;
      }
      $("#type").val(this.currentCard.type);
      $("#number").val(this.currentCard.number);
      // let expire_date = this.currentCard.expiration_date;
      // const final_date = [expire_date.getFullYear(), expire_date.getMonth(), expire_date.getDate()].join('/');
      // console.log(final_date)
      $("#expiration_date").val(this.currentCard.expiration_date);
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
