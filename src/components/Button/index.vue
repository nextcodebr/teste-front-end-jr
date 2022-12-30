<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="nx-button"
    :loading="loading"
    :disabled="isDisabled"
    :progress="inProgressValue"
    :style="`--progress:${inProgressValue}`"
  >
    <span v-if="inProgressValue">{{ inProgressLabel }} ({{ inProgressValue }})</span>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: 'NxButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inProgressValue: {
      type: String,
      default: null
    },
    inProgressLabel: {
      type: String,
      default: 'Uploading...'
    }
  },
  computed: {
    isDisabled () {
      return this.disabled || this.loading
    }
  }
}
</script>
<style src="./styles.scss" scoped lang="scss" />
