<template>
  <div className="no-bullets p-2">
    <label id="name"><b>{{ label }}: </b></label>
    <input
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="searchValue"
      @input="handleInputChange"
      class="form-control"
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
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    isRequired: {
      type: Boolean,
      default: 'false'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: '',
    },
    onChange: {
      type: Function,
      default: null,
    }
  },
  setup(props) {
    const searchValue = ref(props.value)

    // Fonction qui gère les changements dans l'input
    const handleInputChange = (event) => {
      searchValue.value = event.target.value
      // Vérifie si la fonction onChange est passée en prop, si oui l'appelle
      if (props.onChange) {
        props.onChange(event)
      }
    }
  }  
}

</script>
<style>
  
</style>
