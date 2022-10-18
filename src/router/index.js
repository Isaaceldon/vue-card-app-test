import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("../components/Home.vue")
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import("../components/Register.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import("../components/Login.vue")
  },


  /**DEBIT CARD ROUTES */
  {
    path: '/listCard',
    name: 'listDebitCard',
    
    component: () => import( '../views/ListDebitCard.vue')
  },

  {
    path:'/editCard/:cardId',
    name: 'editCard',
   component: () => import( '../views/EditCard.vue')
  },
  
  {
    path:'/infoCard/:cardId',
    name: 'infoCard',
    component: () => import( '../views/AllCardView.vue')
  
  },
  {
    path:'/newCard',
    name: 'newCard',
    component: () => import( '../views/AddCard.vue')

  },

/*** TRANSACTION ROUTES */

  // {
  //   path: '/listTransaction',
  //   name: 'listTransaction',
    
  //   component: () => import( '../views/ListCardTransaction.vue')
  // },

  // {
  //   path:'/editTransaction/:transactionId',
  //   name: 'editTransaction',
  //  component: () => import( '../views/EditTransaction.vue')
  // },
  
  // {
  //   path:'/infoTransaction',
  //   name: 'infoTransaction',
  //   component: () => import( '../views/ViewTransaction.vue')
  
  // },

  {
    path:'/newTransaction',
    name: 'newTransaction',
    component: () => import( '../views/AddTransaction.vue')

  },

  /*** NOT FOUND ROUTE */
  {
    path: '*',
    name: 'notFound',
    
    component: () => import( '../views/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
