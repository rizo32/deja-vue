<template>
  <div className="no-bullets p-2">
    <label id="name"><b>{{ label }}: </b></label>
    <input
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="isFileType ? undefined : value"
      @input="isFileType ? $emit('update:file', $event.target.files[0]) : $emit('update:value', $event.target.value)"      class="form-control"
      :required="isRequired"
    />
  </div>
</template>

<script>

export default {
  name: 'SearchBar',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: null
    }
  },
  computed: {
    isFileType () {
      return this.type === 'file'
    }
  }
}

</script>
<style>

</style>
