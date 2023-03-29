<template>
  <div>
    <app-header :routes="routes" title="Target Canada" />
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data () {
    return {
      routes: [
        // define your routes here
      ]
    }
  }
}
</script>
