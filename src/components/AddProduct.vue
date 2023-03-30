
<template>
  <div class="container py-1 d-flex flex-column gap-5 w-50">
    <form @submit.prevent="onSubmit" class="bg-light container border border-info rounded py-4">
    <h3 class="text-center">Add to inventory</h3>
      <search-bar
        type="text"
        :value="newProduct.name"
        @onChange="handleValueChange"
        placeholder="ex. thingy"
        name="name"
        label="Name"
        :is-required="true"
      />
      <search-bar
        type="text"
        :value="newProduct.category"
        @onChange="handleValueChange"
        placeholder="ex. Laptop"
        name="category"
        label="Category"
        :is-required="true"
      />
      <search-bar
        type="number"
        :value="newProduct.price"
        @onChange="handleValueChange"
        placeholder="ex. 99.99$"
        name="price"
        label="Price"
        :is-required="true"
      />
      <search-bar
        type="text"
        :value="newProduct.description"
        @onChange="handleValueChange"
        placeholder="ex. blabla"
        name="description"
        label="Description"
      />
      <div class="d-flex justify-content-evenly py-3">
        <div class="lead pointer">
          <router-link class="text-dark text-decoration-none" to='/products' >
            <span>Back </span>
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </router-link>
        </div>
        <input class="lead" type="submit" value="Create" />
      </div>
    </form>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'AddProduct',
  components: {
    SearchBar
  },
  props: {

  },
  setup () {
    const newProduct = ref({
      name: '',
      price: '',
      description: '',
      category: ''
    })

    const handleValueChange = (event) => {
      const { name, value } = event.target
      newProduct.value = { ...newProduct.value, [name]: value }
    }
    
    // Gestion de la soumission du formulaire
    const route = useRoute()
    const onSubmit = () => {
      onProductAdd(newProduct.value)
      newProduct.value = {
        name: '',
        price: '',
        description: '',
        category: ''
      }
      route.push('/products')
    }
  }
}

</script>
<style>
  
</style>
