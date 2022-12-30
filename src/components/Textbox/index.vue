<template>
  <div
    class="nx-textbox"
  >
    <label
      :for="label"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      v-bind="$attrs"
      :value="model"
      @input="update"
      v-on="listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'NxTextbox',
  props: {
    value: {
      type: [String, Number, Boolean, Array],
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    update (event) {
      this.$emit('input', event.target.value)
    }
  },
  watch: {
    value (newValue) {
      this.model = newValue
    }
  },
  data () {
    return {
      model: this.value
    }
  },
  computed: {
    listeners () {
      const events = this.$listeners
      delete events.input
      return events
    }
  }
}
</script>
<style src="./styles.scss" scoped lang="scss" />
