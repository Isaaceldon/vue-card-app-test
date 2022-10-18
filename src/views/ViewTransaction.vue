<template>
   <div>
    <ul>
      <li>
        Carte Number: <span class="mx-3 current-card-info">{{ card.number }}</span>
      </li>
      <li>
        Card Type:<span class="mx-3 current-card-info">{{ card.type }}</span>
      </li>
      <li>
        Date of expiration:<span class="mx-3 current-card-info">{{
          card.expiration_date
        }}</span>
      </li>
      <li>
        Amount:<span class="mx-3 current-card-info">{{
          transaction.amount
        }}</span>
      </li>
      <li>
        Currency code:<span class="mx-3 current-card-info">{{
          transaction.currency_code
        }}</span>
      </li>
     
    </ul>

  </div>
</template>

<script>
export default {
    name: 'ViewTransaction',
    props:[
        "card","transaction"
    ],

    created(){
        console.log(this.card)
    }

}
</script>

<style scoped>
/* .card-table {
  width: 80%;
  position: relative;
  margin: 0px auto;
}

.debit-card {
  top: 100px;
  position: relative;
} */
</style>