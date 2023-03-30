<template>
  <div>
    <app-header :routes="routes" title="Target Canada" />
    <router-view :products="products.products" />
    <app-footer :year="currentYear" />
  </div>
</template>

<style>

</style>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
    // products
  },
  data () {
    return {
      routes: [
        // define your routes here
      ],
      currentYear: new Date().getFullYear(),
      products: []
    }
  },
  created () {
    axios.get('data/products-db.json')
      .then(response => {
        this.products = response.data
        // console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<!-- should i put the style here? -->
