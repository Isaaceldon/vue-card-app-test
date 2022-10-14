<template>
  <div class="debit-card">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>List of debit card</h3>
        </div>
        <div class="col-md-6">
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
            <th scope="col">Card Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Currency Code</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>

            <td>Otto</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <router-link to="/infoTransaction/1" class="btn mx-1 btn-info"
                >View</router-link
              >
              <router-link to="/editTransaction/1" class="btn mx-1 btn-primary"
                >Edit</router-link
              >
              <button class="btn mx-1 btn-danger" @click="showAlert(1)">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>

            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <router-link to="/infoTransaction/1" class="btn mx-1 btn-info"
                >View</router-link
              >
              <router-link to="/editTransaction/1" class="btn mx-1 btn-primary"
                >Edit</router-link
              >
              <button class="btn mx-1 btn-danger" @click="showAlert(2)">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>

            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>
              <router-link to="/infoTransaction/1" class="btn mx-1 btn-info"
                >View</router-link
              >
              <router-link to="/editTransaction/1" class="btn mx-1 btn-primary"
                >Edit</router-link
              >
              <button class="btn mx-1 btn-danger" @click="showAlert(3)">
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
export default {
  name: "ListTransactionComponent",
  data() {
    return {
      Errors: [],
    };
  },
  methods: {
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
