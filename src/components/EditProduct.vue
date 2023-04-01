<template>
  <div class="container py-1 d-flex flex-column gap-5 w-50">
    <form
      @submit.prevent="editProduct"
      class="bg-light container border border-info rounded py-4"
    >
      <h3 class="text-center">{{ editedProduct.name }}</h3>
      <SearchBar
        type="text"
        :value="editedProduct.name"
        name="name"
        label="Name"
        @update:value="handleValueChange($event, 'name')"
      />
      <SearchBar
        type="text"
        :value="editedProduct.category"
        name="category"
        label="Category"
        @update:value="handleValueChange($event, 'category')"
      />
      <SearchBar
        type="number step=0.01"
        :value="editedProduct.price"
        name="price"
        label="Price"
        @update:value="handleValueChange($event, 'price')"
      />
      <SearchBar
        type="text"
        :value="editedProduct.description"
        name="description"
        label="Description"
        @update:value="handleValueChange($event, 'description')"
      />
      <div class="text-center">
        <div class="d-flex justify-content-evenly py-3">
          <div class="lead pointer">
            <router-link
              class="text-dark text-decoration-none"
              :to="`/product/${editedProduct.id}`">
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
import { ref, computed, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductDataService from '@/services/ProductDataService'

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
    const product = computed(() => {
      const product = props.products.find(product => product.id === parseInt(productId.value))
      return { ...product }
    }
    // props.products.find((product) => product.id === parseInt(productId.value))
    )
    const editedProduct = reactive({ ...product.value })

    const handleValueChange = (value, searchBarName) => {
      // console.log(value, searchBarName)
      editedProduct[searchBarName] = value
    }

    const editProduct = () => {
      ProductDataService.update(product.value.id, editedProduct)
        .then(response => {
          props.onProductUpdate({ ...editedProduct })
          router.push({ name: 'products' })
        })
        .catch(e => {
          this.message = e.response.data.message
        })
    }

    onMounted(() => {
      productId.value = route.params.id
    })

    return {
      product,
      editedProduct,
      handleValueChange,
      editProduct
    }
  }
}
</script>
