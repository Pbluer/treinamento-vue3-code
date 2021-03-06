<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import loading from './Loading'
export default {
  components: { loading },
  props: {
    name: { type: String, require: true }
  }
}
</script>
