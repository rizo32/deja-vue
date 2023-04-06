
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
      <div className="no-bullets p-2">
        <label for="newProduct.category"><b>Category</b></label>
        <select v-model="newProduct.category" name="newProduct.category" class="form-control">
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="Console">Console</option>
        </select>
      </div>
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
      <search-bar
        type="file"
        @update:file="handleFileChange($event)"
        name="photo"
        label="Picture"
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
import ProductDataService from '@/services/ProductDataService'
import axios from '@/http-common'

export default {
  name: 'AddProduct',
  components: {
    SearchBar
  },
  inject: ['handleProductAdd'],
  data () {
    return {
      newProduct: {
        name: '',
        price: '',
        category: 'Laptop', // default value
        description: '',
        photo: ''
      }
    }
  },
  methods: {

    handleValueChange (value, searchBarName) {
      this.newProduct[searchBarName] = value
    },
    handleFileChange (file) {
      this.newProduct.photo = file
    },
    async saveProduct (e) {
      if (this.newProduct.photo) {
        const formData = new FormData()
        formData.append('file', this.newProduct.photo)

        try {
          const response = await axios.post('/products/files', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })

          // Remove the server root directory from the filePath
          const filePath = response.data.filePath.replace(/^.*uploads/, 'uploads').replace(/\\/g, '/')

          // Update the newProduct.photo property with the uploaded file's URL or path
          this.newProduct.photo = filePath
        } catch (error) {
          console.log('Error uploading the file:', error)
          this.message = 'Error uploading the file.'
          return
        }
      } else {
        // Set the default picture path when no photo is submitted
        this.newProduct.photo = 'uploads/placeholder.png'
      }
      ProductDataService.create(this.newProduct)
        .then(response => {
          this.newProduct.id = response.data.id
          this.handleProductAdd(this.newProduct)
          this.message = null
          this.submitted = true
        })
        .catch(e => {
          console.log(e.response.data.message)
          this.message = e.response.data.message
        })
    }
  }
}

</script>
<style>

</style>
