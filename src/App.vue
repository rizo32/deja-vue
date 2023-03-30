<template>
  <div>
    <app-header :routes="routes" title="Target Canada" />
    <router-view :products="products" :onDelete="handleProductDeleted" />
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
  },
  data () {
    return {
      currentYear: new Date().getFullYear(),
      products: []
    }
  },
  created () {
    axios.get('data/products-db.json')
      .then(response => {
        this.products = response.data.products
        // console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    handleProductDeleted (id) {
      const updatedProducts = this.products.filter(product => product.id !== id)
      this.products = updatedProducts
    }
  }
}
</script>
<!-- should i put the style here? -->
