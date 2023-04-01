
<template>
  <div class="container py-1 d-flex flex-column gap-5 w-50">
    <form @submit.prevent="saveProduct" class="bg-light container border border-info rounded py-4">
    <h3 class="text-center">Add to inventory</h3>
      <search-bar
        type="text"
        :value="newProduct.name"
        @update:value="handleValueChange($event, 'name')"
        placeholder="ex. thingy"
        name="name"
        label="Name"
        :is-required="true"
      />
      <search-bar
        type="text"
        :value="newProduct.category"
        @update:value="handleValueChange($event, 'category')"
        placeholder="ex. Laptop"
        name="category"
        label="Category"
        :is-required="true"
      />
      <search-bar
        type="number step=0.01"
        :value="newProduct.price"
        @update:value="handleValueChange($event, 'price')"
        placeholder="ex. 99.99$"
        name="price"
        label="Price"
        :is-required="true"
      />
      <search-bar
        type="text"
        :value="newProduct.description"
        @update:value="handleValueChange($event, 'description')"
        placeholder="ex. blabla"
        name="description"
        label="Description"
      />
      <!-- @update:value="handleValueChange($event, searchBarName)" -->
      <!-- @onChange="handleValueChange" -->

      <div class="d-flex justify-content-evenly py-3">
        <div class="lead pointer">
          <router-link class="text-dark text-decoration-none" to='/products' >
            <span>Back </span>
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </router-link>
        </div>
        <input class="lead" type="submit" value="Create" />
        <!-- <button class="" type="button" @click="saveProduct">Create </button> -->
      </div>
    </form>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import ProductDataService from '@/services/ProductDataService'
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'

export default {
  name: 'AddProduct',
  components: {
    SearchBar
  },
  props: {
    onProductAdd: Function
  },
  data () {
    return {
      newProduct: {
        name: '',
        price: '',
        description: '',
        category: ''
      }
    }
  },
  methods: {

    handleValueChange (value, searchBarName) {
      this.newProduct[searchBarName] = value
    },

    saveProduct (e) {
      ProductDataService.create(this.newProduct)
        .then(response => {
          console.log(response.data)
          this.newProduct.id = response.data.id
          this.$router.push({ name: 'products' })
          console.log(this.submitted)
        })
        .catch(e => {
          console.log(e.response.data.message)
          this.message = e.response.data.message
        })
    }
  }

  // Gestion de la soumission du formulaire
  // const router = useRouter()
  // const onSubmit = () => {
  //   props.onProductAdd(newProduct.value)
  //   newProduct.value = {
  //     name: '',
  //     price: '',
  //     description: '',
  //     category: ''
  //   }
  //   router.push('/products')
  // },

  // return {
  //   newProduct,
  //   handleValueChange,
  //   onSubmit
  // }
}

</script>
<style>

</style>
