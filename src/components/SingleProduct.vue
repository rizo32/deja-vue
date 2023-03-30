<template>
  <div class="bg-light container border border-info rounded py-4">
    <div class="text-center">
      <h3 v-if="onDelete">{{product.name}}</h3>
      <router-link v-else :to="'/product/' + product.id">
        <h3>{{ product.name }}</h3>
      </router-link>
    </div>
    <li class="no-bullets p-2">
      <b>Category: </b>
      {{product.category}}
    </li>
    <li class="no-bullets p-2">
      <b>Price: </b>
      {{product.price}}$
    </li>
    <li class="no-bullets p-2">
      <b>Description: </b>
      {{product.description}}
    </li>
    <!-- Si onDelete existe, c'est parce qu'on vient de EditProduct, et pas la page liste Products -->
    <li v-if="onDelete" class="no-bullets p-2">
      <ColoredLine color="red" />
      <div class="d-flex justify-content-evenly">
      <div class="lead pointer">
        <router-link class="text-dark text-decoration-none" to="/products" >
          <span>Back </span>
          <font-awesome-icon icon="fa-solid fa-arrow-left" />
        </router-link>
      </div>
        <div class="lead pointer">
          <router-link class="text-dark text-decoration-none" :to="'/product-edit/'+product.id" >
            <span>Update </span>
            <font-awesome-icon icon="fa-solid fa-wrench" />
          </router-link>
        </div>
        <div class="lead pointer" @click=onDelete(product.id)>
          <span>Delete </span>
          <font-awesome-icon icon="fa-solid fa-xmark" class="text-danger" />
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import ColoredLine from './ColoredLine'

export default {
  name: 'SingleProduct',

  components: {
    ColoredLine
  },

  props: {
    product: {
      type: Object,
      required: true
    },
    onDelete: {
      type: Function,
      required: false
    }
  }
}
</script>
<style>

</style>
