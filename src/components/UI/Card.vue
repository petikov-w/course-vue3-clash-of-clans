<template lang="pug">

.card
  span.card-name {{name}}
  span.card-title {{title}}
  .card-body
    slot

</template>

<script>
export default {
  name: "uiCard",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped>

</style>