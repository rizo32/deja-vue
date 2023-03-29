<template>
  <header class="header">
    <nav class="navbar navbar-expand-md bg-info navbar-light">
      <div class="container">
        <router-link to="/"><img src="target-logo.png" height="50px"/></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item px-3" :class="{ 'fw-bold': $route.path === '/products' }">
              <Link to="/products" class="nav-link text-light">
                Our products
              </Link>
            </li>
            <li class="nav-item px-3" :class="{ 'fw-bold': $route.path === '/product-create' }">
              <router-link to="/product-create" class="nav-link text-light">Inventory mgmt</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container py-3 text-center">
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>

<script>
// import { RouterLink } from 'vue-router'

export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    routes: {
      type: Array,
      required: true
    }
  }
}
</script>
