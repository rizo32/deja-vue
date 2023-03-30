<template>
  <ul class="container py-1 d-flex flex-column gap-5 w-50">
    <li class="no-bullets" v-for="product in products" :key="product.id">
      <SingleProduct :product="product" />
    </li>
  </ul>
</template>
<script>
import SingleProduct from '../components/SingleProduct'
export default {
  name: 'ProductsView',
  components: {
    SingleProduct
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>

</style>
