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
      <div className="no-bullets p-2">
        <label for="newProduct.category"><b>Category</b></label>
      <select v-model="editedProduct.category" name="newProduct.category" class="form-control">
        <option value="Laptop">Laptop</option>
        <option value="Phone">Phone</option>
        <option value="Console">Console</option>
      </select>
      </div>
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
      <search-bar
        type="file"
        @change="handleFileChange($event.target.files[0])"
        name="photo"
        label="Picture"
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
import SearchBar from '@/components/SearchBar'
import { ref, computed, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductDataService from '@/services/ProductDataService'
import axios from '@/http-common'

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
    const editedFile = ref(null)
    const product = computed(() => {
      const product = props.products.find(product => product.id === parseInt(productId.value))
      return { ...product }
    }
    )
    const editedProduct = reactive({ ...product.value })

    const handleValueChange = (value, searchBarName) => {
      editedProduct[searchBarName] = value
    }
    // eslint-disable-next-line no-unused-vars
    const handleFileChange = (file) => {
      editedFile.value = file
    }
    // const handleFileChange = async (file) => {
    //   if (file) {
    //     try {
    //       const filePath = await uploadFile(file)
    //       editedProduct.photo = filePath
    //     } catch (error) {
    //       console.log('Error uploading the file:', error)
    //       this.message = 'Error uploading the file.'
    //     }
    //   }
    // }

    // eslint-disable-next-line no-unused-vars
    const uploadFile = async (file) => {
      const formData = new FormData()
      formData.append('file', file)
      const response = await axios.post('/products/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      // Remove the server root directory from the filePath
      const filePath = response.data.filePath
        .replace(/^.*uploads/, 'uploads')
        .replace(/\\/g, '/')
      return filePath
    }

    const editProduct = async () => {
      try {
        if (editedProduct.value) {
          const formData = new FormData()
          formData.append('file', editedProduct.value)
          try {
            const response = await axios.post('/products/files', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            // Remove the server root directory from the filePath
            const filePath = response.data.filePath.replace(/^.*uploads/, 'uploads').replace(/\\/g, '/')
            // Update the newProduct.photo property with the uploaded file's URL or path
            editedProduct.value = filePath
          } catch (error) {
            console.log('Error uploading the file:', error)
            this.message = 'Error uploading the file.'
            return
          }
          // const filePath = await uploadFile(editedProduct.photo)
          // editedProduct.photo = filePath
        }
        ProductDataService.update(product.value.id, editedProduct)
          .then((response) => {
            props.onProductUpdate({ ...editedProduct })
            router.push({ name: 'products' })
          })
          .catch((e) => {
            this.message = e.response.data.message
          })
      } catch (error) {
        console.log('Error uploading the file:', error)
        this.message = 'Error uploading the file.'
      }
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
