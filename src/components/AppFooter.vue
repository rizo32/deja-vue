<template>
  <footer class="container text-center fst-italic pt-5 pb-2">
      <p>Copyright rizorizo.art {{ year }}</p>
  </footer>
</template>

<script>

export default {
  name: 'AppFooter',
  props: {
    year: {
      type: Number,
      required: true
    }
  }
}
</script>
