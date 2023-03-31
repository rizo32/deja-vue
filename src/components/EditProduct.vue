<template>
  <div class="container py-1 d-flex flex-column gap-5 w-50">
    <form
      @submit.prevent="onSubmit"
      class="bg-light container border border-info rounded py-4"
    >
      <h3 class="text-center">{{ product.name }}</h3>
      <SearchBar
        type="text"
        :value="product.name"
        name="name"
        label="Name"
        @change="handleValueChange"
      />
      <SearchBar
        type="text"
        :value="product.category"
        name="category"
        label="Category"
        @change="handleValueChange"
      />
      <SearchBar
        type="number step=0.01"
        :value="product.price"
        name="price"
        label="Price"
        @change="handleValueChange"
      />
      <SearchBar
        type="text"
        :value="product.description"
        name="description"
        label="Description"
        @change="handleValueChange"
      />
      <div class="text-center">
        <div class="d-flex justify-content-evenly py-3">
          <div class="lead pointer">
            <router-link
              class="text-dark text-decoration-none"
              :to="`/products/${product.id}`">
              <span>Back </span>
              <FaArrowLeft />
            </router-link>
          </div>
          <input class="lead" type="submit" value="Update" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import SearchBar from './SearchBar'
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'EditProduct',
  components: { SearchBar },
  props: {
    products: Array,
    onProductUpdate: Function
  },
  setup (props) {
    const route = useRoute()
    const router = useRouter()
    const productId = ref(route.params.id)
    const product = computed(() =>
      props.products.find((product) => product.id === parseInt(productId.value))
    )

    const handleValueChange = (event) => {
      const { name, value } = event.target
      product.value[name] = value
    }

    const onSubmit = () => {
      props.onProductUpdate(product.value)
      router.push('/products')
    }

    onMounted(() => {
      productId.value = route.params.id
    })

    return {
      product,
      handleValueChange,
      onSubmit
    }
  }
}
</script>
