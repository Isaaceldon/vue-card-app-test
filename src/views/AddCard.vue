<template>
  <div class="container add-card-form">
    <div class="row">
      <div class="col-md-10" style="margin: 0px auto">
        <ErrorComponent :errors="errors"></ErrorComponent>

        <form class="new-form container card col-md-8 col-sm-11"  method="POST"  @submit="addCard">
          <h3 class="new-form-h3">Creating of new card</h3>
          <div class="row">
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="type">Type Card</label>
              <input
                class="form-control"
                type="text"
                name="type"
                id="type"
                v-model="type"
              />
            </div>
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="number">Card number</label>
              <input
                class="form-control"
                type="number"
                name="number"
                id="number"
                placeholder="Ex:1000 0000 0000 0000"
                min="0"
                v-model="number"
              />
            </div>
            <div class="form-group my-2 col-md-12 col-sm-12">
              <label class="control-label" for="expiration_date"
                >Expiration Date</label
              >
              <input
                class="form-control"
                type="date"
                name="expiration_date"
                id="expiration_date"
                min="0"
                v-model="expiration_date"
              />
            </div>
          </div>

          <div class="d-flex my-3">
            <input
              class="form-control btn-primary btn  "
              type="submit"
              value="Create Card"
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
import {getAPI} from "../axios-api.js";
export default {
  name: "AddCardComponent",
  components: {
    ErrorComponent,
  },

  data() {
    return {
      errors: [],
      type: null,
      number: null,
      expiration_date: null,
    };
  },

  methods: {
    addCard(e) {
      this.errors = [];
      if (
        this.type &&
        this.number &&
        this.expiration_date 
      ) {
        getAPI
            .post("/debit-cards", {
              type: this.type,
              number: this.number,
              expiration_date: this.expiration_date,
            })
            .then((response) => {
            //   console.log(response);
              if (response.data.success == 1 && response.status == 200) {
                setInterval(() => {
                  document.location.href = "/listCard";
                  this.$swal(
                    "Creating",
                    "Debit card created with success!",
                    "success"
                  );
                }, 1000);
                this.$router.go(0);
              } else {
                this.errors.push("Creating card failed!");
              }
            });
        }

      if (!this.type) {
        this.errors.push("type is required");
      }
    
      if (!this.number) {
        this.errors.push("number is required");
      }

      if (!this.expiration_date) {
        this.errors.push("expiration_date is required");
      }
      e.preventDefault();
    },
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


input[type="reset"]:focus{
    background: red !important;
    color:white;
}
</style>
