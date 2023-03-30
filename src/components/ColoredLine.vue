<template>
  <hr :style="lineStyle">
</template>

<script>
export default {
  name: 'ColoredLine',
  props: {
    color: {
      type: String,
      required: false,
      default: '#000000'
    }
  },
  computed: {
    lineStyle () {
      return {
        color: this.color || '#000000'
        // backgroundColor: this.color
      }
    }
  }
}
</script>

<style scoped>
hr {
  height: 2px;
  width: 100%;
}
</style>
