<template>
  <div className="container py-1 d-flex flex-column gap-5 w-50">
    <SingleProduct :product="product" :onDelete="handleProductDeleted" />
  </div>
</template>

<script>
import SingleProduct from '../components/SingleProduct'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'ProductView',
  components: {
    SingleProduct
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    onDelete: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    const router = useRouter()
    const route = useRoute()
    // trouver le produit correspondant à l'ID dans l'URL
    const product = computed(() => {
      return props.products.find((p) => p.id === parseInt(route.params.id))
    })

    // Fonction de suppression
    const handleProductDeleted = (id) => {
      props.onDelete(id)
      // redirection
      router.push('/products')
    }

    return {
      product,
      handleProductDeleted
    }
  }
}
</script>
<style>

</style>
