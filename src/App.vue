<template>
  <div>
    <app-header :routes="routes" title="Target Canada" />
    <router-view :products="products" :onDelete="handleProductDeleted" :onProductUpdate="updateProduct" />
    <app-footer :year="currentYear" />
  </div>
</template>

<style>

</style>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import ProductDataService from '@/services/ProductDataService'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  provide () {
    return {
      handleProductAdd: this.handleProductAdd
    }
  },
  data () {
    return {
      currentYear: new Date().getFullYear(),
      products: []
    }
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.products = response.data
        // console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },

  methods: {
    // Delete
    handleProductDeleted (id) {
      // const index = this.products.findIndex(product => product.id === id)
      // this.products.splice(index, 1)
      const updatedProducts = this.products.filter(product => product.id !== id)
      this.products = updatedProducts
      this.$router.push({ name: 'products' })
    },

    // Add
    handleProductAdd (newProduct) {
      //   On crée un nouvel array de produits en ajoutant le nouveau produit
      this.products.push(newProduct)
      this.$router.push({ name: 'products' })
    },

    // Edit
    updateProduct (updatedProduct) {
      console.log(updatedProduct)
      const index = this.products.findIndex(product => product.id === updatedProduct.id)
      if (index !== -1) {
        this.products.splice(index, 1, updatedProduct)
      }
    }
  }
}
</script>
